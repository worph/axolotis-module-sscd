/*
 * Define axis-aligned-bounding-box class.
 * Author: Ronen Ness, 2015
 */

// Axis-aligned-bounding-box class
// position: top-left corner (vector)
// size: width and height (vector)
import {SSCD} from "../sscdNameSpace"

SSCD.AABB = function(position, size) {
	this.position = position.clone();
	this.size = size.clone();
};

// some aabb methods
SSCD.AABB.prototype = {

	// expand this bounding-box by other bounding box
	expand: function(other) {
		// get new bounds
		let min_x = Math.min(this.position.x, other.position.x);
		let min_y = Math.min(this.position.y, other.position.y);
		let max_x = Math.max(this.position.x + this.size.x, other.position.x + other.size.x);
		let max_y = Math.max(this.position.y + this.size.y, other.position.y + other.size.y);

		// set them
		this.position.x = min_x;
		this.position.y = min_y;
		this.size.x = max_x - min_x;
		this.size.y = max_y - min_y;
	},

	// expand this bounding-box with vector
	add_vector: function(vector) {
		// update position x
		let push_pos_x = this.position.x - vector.x;
		if (push_pos_x > 0) {
			this.position.x -= push_pos_x;
			this.size.x += push_pos_x;
		}

		// update position y
		let push_pos_y = this.position.y - vector.y;
		if (push_pos_y > 0) {
			this.position.y -= push_pos_y;
			this.size.y += push_pos_y;
		}

		// update size x
		let push_size_x = vector.x - (this.position.x + this.size.x);
		if (push_size_x > 0) {
			this.size.x += push_size_x;
		}

		// update size y
		let push_size_y = vector.y - (this.position.y + this.size.y);
		if (push_size_y > 0) {
			this.size.y += push_size_y;
		}
	},

	// clone this aabb
	clone: function() {
		return new SSCD.AABB(this.position, this.size);
	}

};
