/*
 * Physical world contains a grid of shapes you can efficiently check collision with
 * Author: Ronen Ness, 2015
 */
 
// a collision world. you create an instance of this class and add bodies to it to check collision.
//
// params is an optional dictionary with the following optional settings:
//			grid_size: 		for better performance, the world is divided into a grid of world-chunks and when collision is checked we will
//								only match objects from the same chunk(s) on grid. this param defines the grid size. default to 512.
//			grid_error: 	max amount of pixels a shape can move before updating the collision grid. default to 2.
//								you can increase this number to make moving objects more efficient for the price of sometimes
//								less accurate collision around the edges. set to 0 if you want to always update grid (useful if all your moving objects move fast)
import {SSCD} from "./sscdNameSpace"
SSCD.World = function(params) {

	this.__init_world(params);

};

// collision world prototype
SSCD.World.prototype = {

	// init the world
	__init_world: function(params) {
		// set defaults
		params = params || {};
		params.grid_size = params.grid_size || 512;
		params.grid_error = params.grid_error !== undefined ? params.grid_error : 2;

		// create grid and set params
		this.__grid = {};
		this.__params = params;

		// all the shapes currently in this world
		this.__all_shapes = {};

		// create the empty collision flags dictionary
		this.__collision_tags = {};
		this.__next_coll_tag = 0;
	},

	// define a new collision tag
	__create_collision_tag: function(name) {
		// if already exist throw exception
		if (this.__collision_tags[name]) {
			throw new SSCD.IllegalActionError("Collision tag named '" + name + "' already exist!");
		}

		// set collision tag
		this.__collision_tags[name] = 1 << this.__next_coll_tag++;
	},

	// all-tags flags
	_ALL_TAGS_VAL: Number.MAX_SAFE_INTEGER || 4294967295,

	// clean-up world memory
	cleanup: function() {
		// iterate over grid rows
		let rows = Object.keys(this.__grid);
		for (let _i = 0; _i < rows.length; ++_i) {
			let i = rows[_i];

			// iterate over grid columns in current row:
			let columns = Object.keys(this.__grid[i]);
			for (let _j = 0; _j < columns.length; ++_j) {
				let j = columns[_j];

				// if empty grid chunk delete it
				if (this.__grid[i][j].length === 0) {
					delete this.__grid[i][j];
				}
			}

			// if no more columns are left in current row delete the row itself
			if (Object.keys(this.__grid[i]).length === 0) {
				delete this.__grid[i];
			}
		}
	},

	// get the hash value of a list of collision tags or individual tag
	// tags can either be a single string or a list of strings
	__get_tags_value: function(tags) {
		// special case: undefined return all possible tags
		if (tags === undefined) {
			return this._ALL_TAGS_VAL;
		}

		// single tag:
		if (typeof tags === "string") {
			return this.__collision_tag(tags);
		}

		// else, assume a list
		let ret = 0;
		for (let i = 0; i < tags.length; ++i) {
			ret |= this.__collision_tag(tags[i]);
		}
		return ret;
	},

	// return the value of a single collision tag, define it if not exist
	__collision_tag: function(name) {
		// if tag doesn't exist create it
		if (this.__collision_tags[name] === undefined) {
			this.__create_collision_tag(name);
		}

		// return collision tag
		return this.__collision_tags[name];
	},

	// get the grid range that this object touches
	__get_grid_range: function(obj) {
		// get bounding box
		let aabb = obj.get_aabb();

		// calc all grid chunks this shape touches
		let min_i = Math.floor((aabb.position.x) / this.__params.grid_size);
		let min_j = Math.floor((aabb.position.y) / this.__params.grid_size);
		let max_i = Math.floor((aabb.position.x + aabb.size.x) / this.__params.grid_size);
		let max_j = Math.floor((aabb.position.y + aabb.size.y) / this.__params.grid_size);

		// return grid range
		return {
			min_x: min_i,
			min_y: min_j,
			max_x: max_i,
			max_y: max_j
		};
	},

	// add collision object to world
	add: function(obj) {
		// if object already in world throw exception
		if (obj.__world) {
			throw new SSCD.IllegalActionError("Object to add is already in a collision world!");
		}

		// get grid range
		let grids = this.__get_grid_range(obj);

		// add shape to all grid parts
		for (let i = grids.min_x; i <= grids.max_x; ++i) {
			for (let j = grids.min_y; j <= grids.max_y; ++j) {
				// make sure lists exist
				this.__grid[i] = this.__grid[i] || {};
				this.__grid[i][j] = this.__grid[i][j] || [];

				// get current grid chunk
				let curr_grid_chunk = this.__grid[i][j];

				// add object to grid chunk
				curr_grid_chunk.push(obj);

				// add chunk to shape chunks list
				obj.__grid_chunks.push(curr_grid_chunk);
			}
		}

		// set world and grid chunks boundaries
		obj.__world = this;
		obj.__grid_bounderies = grids;
		obj.__last_insert_aabb = obj.get_aabb().clone();

		// add to list of all shapes
		this.__all_shapes[obj.get_id()] = obj;

		// return the newly added object
		return obj;
	},

	// return all shapes in world
	get_all_shapes: function() {
		let ret = [];
		for (let key in this.__all_shapes) {
			if (this.__all_shapes.hasOwnProperty(key)) {
				ret.push(this.__all_shapes[key]);
			}
		}
		return ret;
	},

	// remove object from world
	remove: function(obj) {
		// if object is not in this world throw exception
		if (obj.__world !== this) {
			throw new SSCD.IllegalActionError("Object to remove is not in this collision world!");
		}

		// remove from all the grid chunks
		for (let i = 0; i < obj.__grid_chunks.length; ++i) {
			// get current grid chunk
			let grid_chunk = obj.__grid_chunks[i];

			// remove object from grid
			for (let j = 0; j < grid_chunk.length; ++j) {
				if (grid_chunk[j] === obj) {
					grid_chunk.splice(j, 1);
					break;
				}
			}
		}

		// remove from list of all shapes
		delete this.__all_shapes[obj.get_id()];

		// clear shape world chunks and world pointer
		obj.__grid_chunks = [];
		obj.__world = null;
		obj.__grid_bounderies = null;
		obj.__last_insert_aabb = null;
	},

	// update object grid when it moves or resize etc.
	// this function is used internally by the collision shapes.
	__update_shape_grid: function(obj) {
		let curr_aabb = obj.get_aabb();
		if (this.__params.grid_error === 0 ||
			((Math.abs(curr_aabb.position.x - obj.__last_insert_aabb.position.x) > this.__params.grid_error) ||
				(Math.abs(curr_aabb.position.y - obj.__last_insert_aabb.position.y) > this.__params.grid_error) ||
				(Math.abs(curr_aabb.size.x - obj.__last_insert_aabb.size.x) > this.__params.grid_error) ||
				(Math.abs(curr_aabb.size.y - obj.__last_insert_aabb.size.y) > this.__params.grid_error))) {
			this.remove(obj);
			this.add(obj);
		}
	},

	// check collision and return first object found.
	// obj: object to check collision with (vector or collision shape)
	// collision_tags: optional single or multiple tags to check collision with
	// return: first object collided with, or null if don't collide with anything
	pick_object: function(obj, collision_tags) {
		let outlist = [];
		if (this.test_collision(obj, collision_tags, outlist, 1)) {
			return outlist[0];
		}
		return null;
	},

	// test collision with vector or object
	// @param obj: object to check collision with, can be either Vector (for point collision) or any collision shape.
	// @param collision_tags: optional string or list of strings of tags to match collision with. if undefined will accept all tags
	// @param out_list: optional output list. if provided, will be filled with all objects collided with. note: collision is more efficient if not provided.
	// @param ret_objs_count: if provided, will limit returned objects to given count.
	// @return true if collided with anything, false otherwise.
	test_collision: function(obj, collision_tags, out_list, ret_objs_count) {
		// default collision flags
		collision_tags = this.__get_tags_value(collision_tags);

		// handle vector
		if (obj instanceof SSCD.Vector) {
			return this.__test_collision_point(obj, collision_tags, out_list, ret_objs_count);
		}
		// handle collision with shape
		if (obj.is_shape) {
			return this.__test_collision_shape(obj, collision_tags, out_list, ret_objs_count);
		}
	},


	// test collision with a field of view.
	// a field of view is basically a pizza-like shape starting from the center.
	// @param position: source position (vector).
	// @param distance: fov distance.
	// @param direction: look-at direction in degrees (0 = looking right, 90 = looking down, etc.).
	// @param fov_angle: angle range in degrees.
	// @param collision_tags: optional string or list of strings of tags to match collision with. if undefined will accept all tags
	// @param out_list: optional output list. if provided, will be filled with all objects collided with. note: collision is more efficient if not provided.
	// @return true if collided with anything, false otherwise.
	test_fov: function(position, distance, direction, fov_angle, collision_tags, out_list) {
		// default collision flags
		collision_tags = this.__get_tags_value(collision_tags);

		// default out-list if not provided
		out_list = out_list || [];

		// create a circle and check basic collision with it
		let circle = new SSCD.Circle(position, distance);
		this.__test_collision_shape(circle, collision_tags, out_list,null);

		// now iterate over collided objects and check angle
		for (let i = out_list.length - 1; i >= 0; --i) {
			// get angle between source position and the body
			let angle = position.angle_from(out_list[i].__position);
			if (SSCD.Math.angles_dis(direction, angle) > fov_angle) {
				out_list.splice(i, 1);
			}
		}

		// return if got collision
		return out_list.length > 0;
	},

	// test collision for given point
	// see test_collision comment for more info
	__test_collision_point: function(vector, collision_tags_val, out_list, ret_objs_count) {
		// get current grid size
		let grid_size = this.__params.grid_size;

		// get the grid chunk to test collision with
		let i = Math.floor((vector.x) / grid_size);
		let j = Math.floor((vector.y) / grid_size);

		// if grid chunk is not in use return empty list
		if (this.__grid[i] === undefined || this.__grid[i][j] === undefined) {
			return false;
		}

		// get current grid chunk
		let grid_chunk = this.__grid[i][j];

		// iterate over all objects in current grid chunk and add them to render list
		let found = 0;
		for (let i = 0; i < grid_chunk.length; ++i) {
			// get current object to test
			let curr_obj = grid_chunk[i];

			// if collision tags don't match skip this object
			if (!curr_obj.collision_tags_match(collision_tags_val)) {
				continue;
			}

			// if collide with object:
			if (this.__do_collision(curr_obj, vector)) {
				// if got collision list to fill, add object and set return value to true
				if (out_list) {
					found++;
					out_list.push(curr_obj);
					if (ret_objs_count && found >= ret_objs_count) {
						return true;
					}
				}
				// if don't have collision list to fill simply return true
				else {
					return true;
				}
			}
		}

		// return if collided 
		// note: get here only if got list to fill or if no collision found
		return found > 0;
	},

	// test collision with other shape
	// see test_collision comment for more info
	__test_collision_shape: function(obj, collision_tags_val, out_list, ret_objs_count) {
		let grid;

		// if shape is in this world, use its grid range from cache
		if (obj.__world === this) {
			grid = obj.__grid_bounderies;
		}
		// if not in world, generate grid range
		else {
			grid = this.__get_grid_range(obj);
		}

		// for return value
		let found = 0;

		// so we won't test same objects multiple times
		let already_tests = {};

		// iterate over grid this shape touches
		for (let i = grid.min_x; i <= grid.max_x; ++i) {
			// skip empty rows
			if (this.__grid[i] === undefined) {
				continue;
			}

			// iterate on current grid row
			for (let j = grid.min_y; j <= grid.max_y; ++j) {
				let curr_grid_chunk = this.__grid[i][j];

				// skip empty grid chunks
				if (curr_grid_chunk === undefined) {
					continue;
				}

				// iterate over objects in grid chunk and check collision
				for (let x = 0; x < curr_grid_chunk.length; ++x) {
					// get current object
					let curr_obj = curr_grid_chunk[x];

					// make sure object is not self
					if (curr_obj === obj) {
						continue;
					}

					// check if this object was already tested
					if (already_tests[curr_obj.get_id()]) {
						continue;
					}
					already_tests[curr_obj.get_id()] = true;

					// if collision tags don't match skip this object
					if (!curr_obj.collision_tags_match(collision_tags_val)) {
						continue;
					}

					// if collide with object:
					if (this.__do_collision(curr_obj, obj)) {
						// if got collision list to fill, add object and set return value to true
						if (out_list) {
							found++;
							out_list.push(curr_obj);
							if (ret_objs_count && found >= ret_objs_count) {
								return true;
							}
						}
						// if don't have collision list to fill simply return true
						else {
							return true;
						}
					}
				}

			}
		}

		// return if collided 
		// note: get here only if got list to fill or if no collision found
		return found > 0;
	},

	// do actual collision check between source and target
	__do_collision: function(src, target) {
		return src.test_collide_with(target);
	},

	// debug-render all the objects in world
	// canvas: a 2d canvas object to render on.
	// camera_pos: optional, vector that represent the current camera position is 2d space.
	// show_grid: default to true, if set will render background grid that shows which grid chunks are currently active
	// show_aabb: default to true, if set will render objects axis-aligned bounding boxes
	// NOTE: this function will NOT clear canvas before rendering, if you render within a main loop its your responsibility.
	render: function(canvas, camera_pos, show_grid, show_aabb) {
		// set default camera pos if doesn't exist
		camera_pos = camera_pos || SSCD.Vector.ZERO;

		// set default show_grid and show_aabb
		if (show_grid === undefined) {
			show_grid = true;
		}
		if (show_aabb === undefined) {
			show_aabb = true;
		}

		// get ctx and reset previous transformations
		let ctx = canvas.getContext('2d');
		ctx.setTransform(1, 0, 0, 1, 0, 0);

		// get current grid size
		let grid_size = this.__params.grid_size;

		// get grid parts that are visible based on canvas size and camera position
		let min_i = Math.floor((camera_pos.x) / grid_size);
		let min_j = Math.floor((camera_pos.y) / grid_size);
		let max_i = min_i + Math.ceil(canvas.width / grid_size);
		let max_j = min_j + Math.ceil(canvas.height / grid_size);

		// a list of objects to render
		let render_list = [];

		// iterate over grid
		for (let i = min_i; i <= max_i; ++i) {

			// go over grid row
			for (let j = min_j; j <= max_j; ++j) {
				// get current grid chunk
				let curr_grid_chunk = undefined;
				if (this.__grid[i]) {
					curr_grid_chunk = this.__grid[i][j];
				}

				// render current grid chunk
				if (show_grid) {
					let position = new SSCD.Vector(i * grid_size, j * grid_size).sub_self(camera_pos);
					ctx.beginPath();
					ctx.rect(position.x, position.y, grid_size - 1, grid_size - 1);
					ctx.lineWidth = "1";
					if ((curr_grid_chunk === undefined) || (curr_grid_chunk.length === 0)) {
						ctx.strokeStyle = 'rgba(100, 100, 100, 0.255)';
					} else {
						ctx.strokeStyle = 'rgba(255, 0, 0, 0.3)';
					}
					ctx.stroke();
				}

				// if current grid chunk has no objects skip
				if (curr_grid_chunk === undefined) {
					continue;
				}

				// iterate over all objects in current grid chunk and add them to render list
				for (let x = 0; x < curr_grid_chunk.length; ++x) {
					let curr_obj = curr_grid_chunk[x];
					if (render_list.indexOf(curr_obj) === -1) {
						render_list.push(curr_grid_chunk[x]);
					}
				}
			}
		}

		// now render all objects in render list
		for (let i = 0; i < render_list.length; ++i) {
			render_list[i].render(ctx, camera_pos);
			if (show_aabb) {
				render_list[i].render_aabb(ctx, camera_pos);
			}
		}
	},
};


// for illegal action exception
SSCD.IllegalActionError = function(message) {
	this.name = "Illegal Action";
	this.message = (message || "");
};
SSCD.IllegalActionError.prototype = Error.prototype;
