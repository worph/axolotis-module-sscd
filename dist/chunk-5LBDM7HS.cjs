'use strict';

var chunkNQC62GKA_cjs = require('./chunk-NQC62GKA.cjs');

var V=chunkNQC62GKA_cjs.a((ht,v)=>{var z=Object.prototype.hasOwnProperty,f="~";function m(){}Object.create&&(m.prototype=Object.create(null),new m().__proto__||(f=!1));function T(t,i,e){this.fn=t,this.context=i,this.once=e||!1;}function S(t,i,e,s,n){if(typeof e!="function")throw new TypeError("The listener must be a function");var o=new T(e,s||t,n),l=f?f+i:i;return t._events[l]?t._events[l].fn?t._events[l]=[t._events[l],o]:t._events[l].push(o):(t._events[l]=o,t._eventsCount++),t}function x(t,i){--t._eventsCount===0?t._events=new m:delete t._events[i];}function p(){this._events=new m,this._eventsCount=0;}p.prototype.eventNames=function(){var i=[],e,s;if(this._eventsCount===0)return i;for(s in e=this._events)z.call(e,s)&&i.push(f?s.slice(1):s);return Object.getOwnPropertySymbols?i.concat(Object.getOwnPropertySymbols(e)):i};p.prototype.listeners=function(i){var e=f?f+i:i,s=this._events[e];if(!s)return [];if(s.fn)return [s.fn];for(var n=0,o=s.length,l=new Array(o);n<o;n++)l[n]=s[n].fn;return l};p.prototype.listenerCount=function(i){var e=f?f+i:i,s=this._events[e];return s?s.fn?1:s.length:0};p.prototype.emit=function(i,e,s,n,o,l){var h=f?f+i:i;if(!this._events[h])return !1;var r=this._events[h],u=arguments.length,a,c;if(r.fn){switch(r.once&&this.removeListener(i,r.fn,void 0,!0),u){case 1:return r.fn.call(r.context),!0;case 2:return r.fn.call(r.context,e),!0;case 3:return r.fn.call(r.context,e,s),!0;case 4:return r.fn.call(r.context,e,s,n),!0;case 5:return r.fn.call(r.context,e,s,n,o),!0;case 6:return r.fn.call(r.context,e,s,n,o,l),!0}for(c=1,a=new Array(u-1);c<u;c++)a[c-1]=arguments[c];r.fn.apply(r.context,a);}else {var y=r.length,d;for(c=0;c<y;c++)switch(r[c].once&&this.removeListener(i,r[c].fn,void 0,!0),u){case 1:r[c].fn.call(r[c].context);break;case 2:r[c].fn.call(r[c].context,e);break;case 3:r[c].fn.call(r[c].context,e,s);break;case 4:r[c].fn.call(r[c].context,e,s,n);break;default:if(!a)for(d=1,a=new Array(u-1);d<u;d++)a[d-1]=arguments[d];r[c].fn.apply(r[c].context,a);}}return !0};p.prototype.on=function(i,e,s){return S(this,i,e,s,!1)};p.prototype.once=function(i,e,s){return S(this,i,e,s,!0)};p.prototype.removeListener=function(i,e,s,n){var o=f?f+i:i;if(!this._events[o])return this;if(!e)return x(this,o),this;var l=this._events[o];if(l.fn)l.fn===e&&(!n||l.once)&&(!s||l.context===s)&&x(this,o);else {for(var h=0,r=[],u=l.length;h<u;h++)(l[h].fn!==e||n&&!l[h].once||s&&l[h].context!==s)&&r.push(l[h]);r.length?this._events[o]=r.length===1?r[0]:r:x(this,o);}return this};p.prototype.removeAllListeners=function(i){var e;return i?(e=f?f+i:i,this._events[e]&&x(this,e)):(this._events=new m,this._eventsCount=0),this};p.prototype.off=p.prototype.removeListener;p.prototype.addListener=p.prototype.on;p.prefixed=f;p.EventEmitter=p;typeof v<"u"&&(v.exports=p);});var _={};_.World=function(t){this.__init_world(t);};_.World.prototype={__init_world:function(t){t=t||{},t.grid_size=t.grid_size||512,t.grid_error=t.grid_error!==void 0?t.grid_error:2,this.__grid={},this.__params=t,this.__all_shapes={},this.__collision_tags={},this.__next_coll_tag=0;},__create_collision_tag:function(t){if(this.__collision_tags[t])throw new _.IllegalActionError("Collision tag named '"+t+"' already exist!");this.__collision_tags[t]=1<<this.__next_coll_tag++;},_ALL_TAGS_VAL:Number.MAX_SAFE_INTEGER||4294967295,cleanup:function(){let t=Object.keys(this.__grid);for(let i=0;i<t.length;++i){let e=t[i],s=Object.keys(this.__grid[e]);for(let n=0;n<s.length;++n){let o=s[n];this.__grid[e][o].length===0&&delete this.__grid[e][o];}Object.keys(this.__grid[e]).length===0&&delete this.__grid[e];}},__get_tags_value:function(t){if(t===void 0)return this._ALL_TAGS_VAL;if(typeof t=="string")return this.__collision_tag(t);let i=0;for(let e=0;e<t.length;++e)i|=this.__collision_tag(t[e]);return i},__collision_tag:function(t){return this.__collision_tags[t]===void 0&&this.__create_collision_tag(t),this.__collision_tags[t]},__get_grid_range:function(t){let i=t.get_aabb(),e=Math.floor(i.position.x/this.__params.grid_size),s=Math.floor(i.position.y/this.__params.grid_size),n=Math.floor((i.position.x+i.size.x)/this.__params.grid_size),o=Math.floor((i.position.y+i.size.y)/this.__params.grid_size);return {min_x:e,min_y:s,max_x:n,max_y:o}},add:function(t){if(t.__world)throw new _.IllegalActionError("Object to add is already in a collision world!");let i=this.__get_grid_range(t);for(let e=i.min_x;e<=i.max_x;++e)for(let s=i.min_y;s<=i.max_y;++s){this.__grid[e]=this.__grid[e]||{},this.__grid[e][s]=this.__grid[e][s]||[];let n=this.__grid[e][s];n.push(t),t.__grid_chunks.push(n);}return t.__world=this,t.__grid_bounderies=i,t.__last_insert_aabb=t.get_aabb().clone(),this.__all_shapes[t.get_id()]=t,t},get_all_shapes:function(){let t=[];for(let i in this.__all_shapes)this.__all_shapes.hasOwnProperty(i)&&t.push(this.__all_shapes[i]);return t},remove:function(t){if(t.__world!==this)throw new _.IllegalActionError("Object to remove is not in this collision world!");for(let i=0;i<t.__grid_chunks.length;++i){let e=t.__grid_chunks[i];for(let s=0;s<e.length;++s)if(e[s]===t){e.splice(s,1);break}}delete this.__all_shapes[t.get_id()],t.__grid_chunks=[],t.__world=null,t.__grid_bounderies=null,t.__last_insert_aabb=null;},__update_shape_grid:function(t){let i=t.get_aabb();(this.__params.grid_error===0||Math.abs(i.position.x-t.__last_insert_aabb.position.x)>this.__params.grid_error||Math.abs(i.position.y-t.__last_insert_aabb.position.y)>this.__params.grid_error||Math.abs(i.size.x-t.__last_insert_aabb.size.x)>this.__params.grid_error||Math.abs(i.size.y-t.__last_insert_aabb.size.y)>this.__params.grid_error)&&(this.remove(t),this.add(t));},pick_object:function(t,i){let e=[];return this.test_collision(t,i,e,1)?e[0]:null},test_collision:function(t,i,e,s){if(i=this.__get_tags_value(i),t instanceof _.Vector)return this.__test_collision_point(t,i,e,s);if(t.is_shape)return this.__test_collision_shape(t,i,e,s)},test_fov:function(t,i,e,s,n,o){n=this.__get_tags_value(n),o=o||[];let l=new _.Circle(t,i);this.__test_collision_shape(l,n,o,null);for(let h=o.length-1;h>=0;--h){let r=t.angle_from(o[h].__position);_.Math.angles_dis(e,r)>s&&o.splice(h,1);}return o.length>0},__test_collision_point:function(t,i,e,s){let n=this.__params.grid_size,o=Math.floor(t.x/n),l=Math.floor(t.y/n);if(this.__grid[o]===void 0||this.__grid[o][l]===void 0)return !1;let h=this.__grid[o][l],r=0;for(let u=0;u<h.length;++u){let a=h[u];if(a.collision_tags_match(i)&&this.__do_collision(a,t))if(e){if(r++,e.push(a),s&&r>=s)return !0}else return !0}return r>0},__test_collision_shape:function(t,i,e,s){let n;t.__world===this?n=t.__grid_bounderies:n=this.__get_grid_range(t);let o=0,l={};for(let h=n.min_x;h<=n.max_x;++h)if(this.__grid[h]!==void 0)for(let r=n.min_y;r<=n.max_y;++r){let u=this.__grid[h][r];if(u!==void 0)for(let a=0;a<u.length;++a){let c=u[a];if(c!==t&&!l[c.get_id()]&&(l[c.get_id()]=!0,!!c.collision_tags_match(i)&&this.__do_collision(c,t)))if(e){if(o++,e.push(c),s&&o>=s)return !0}else return !0}}return o>0},__do_collision:function(t,i){return t.test_collide_with(i)},render:function(t,i,e,s){i=i||_.Vector.ZERO,e===void 0&&(e=!0),s===void 0&&(s=!0);let n=t.getContext("2d");n.setTransform(1,0,0,1,0,0);let o=this.__params.grid_size,l=Math.floor(i.x/o),h=Math.floor(i.y/o),r=l+Math.ceil(t.width/o),u=h+Math.ceil(t.height/o),a=[];for(let c=l;c<=r;++c)for(let y=h;y<=u;++y){let d;if(this.__grid[c]&&(d=this.__grid[c][y]),e){let g=new _.Vector(c*o,y*o).sub_self(i);n.beginPath(),n.rect(g.x,g.y,o-1,o-1),n.lineWidth="1",d===void 0||d.length===0?n.strokeStyle="rgba(100, 100, 100, 0.255)":n.strokeStyle="rgba(255, 0, 0, 0.3)",n.stroke();}if(d!==void 0)for(let g=0;g<d.length;++g){let C=d[g];a.indexOf(C)===-1&&a.push(d[g]);}}for(let c=0;c<a.length;++c)a[c].render(n,i),s&&a[c].render_aabb(n,i);}};_.IllegalActionError=function(t){this.name="Illegal Action",this.message=t||"";};_.IllegalActionError.prototype=Error.prototype;_.extend=function(t,i){for(let e in t)i[e]||(i[e]=t[e]);i.__inits=i.__inits||[],t.__init__&&i.__inits.push(t.__init__),i.init=function(){for(let e=0;e<this.__inits.length;++e)this.__curr_init_func=this.__inits[e],this.__curr_init_func();delete this.__curr_init_func;};};_.NotImplementedError=function(t){this.name="NotImplementedError",this.message=t||"";};_.NotImplementedError.prototype=Error.prototype;_.Shape=function(){};_.Shape.prototype={__type:"shape",__collision_type:null,is_shape:!0,__data:null,__next_id:0,__collision_tags:[],__collision_tags_val:_.World.prototype._ALL_TAGS_VAL,__init__:function(){this.__position=new _.Vector(0,0),this.__grid_chunks=[],this.__world=null,this.__grid_bounderies=null,this.__last_insert_aabb=null,this.__id=_.Shape.prototype.__next_id++;},get_id:function(){return this.__id},set_collision_tags:function(t){if(this.__world===null)throw new _.IllegalActionError("Can't set tags for a shape that is not inside a collision world!");return t===null?(this.__collision_tags=[],this.__collision_tags_val=_.World.prototype._ALL_TAGS_VAL):(this.__collision_tags_val=this.__world.__get_tags_value(t),t instanceof Array||(t=[t]),this.__collision_tags=t),this.__update_tags_hook&&this.__update_tags_hook(),this},__update_tags_hook:null,get_collision_tags:function(){return this.__collision_tags},collision_tags_match:function(t){if(isNaN(t)){if(this.__world===null)throw new _.IllegalActionError("If you provide tags as string(s) the shape must be inside a collision world to convert them!");t=this.__world.__get_tags_value(t);}return (this.__collision_tags_val&t)!==0},test_collide_with:function(t){return _.CollisionManager.test_collision(this,t)},repel:function(t,i,e,s,n){i=i||1,e=e||1,s===void 0&&(s=0),n===void 0&&(n=1);let o,l,h=this.get_repel_direction(t).multiply_scalar_self(i);n&&(o=h.multiply_scalar(n)),s&&(l=h.multiply_scalar(s*-1));let r=_.Vector.ZERO.clone(),u=!0;for(;u&&e>0;)e--,o&&t.move(o),l&&this.move(l),r.add_self(h),u=this.test_collide_with(t);return r},get_repel_direction:function(t){let i=this.get_abs_center(),e;return t instanceof _.Vector?e=t:e=t.get_abs_center(),e.sub(i).normalize_self()},__get_render_fill_color:function(t){return this.__override_fill_color?this.__override_fill_color:this.__collision_tags_to_color(this.__collision_tags_val,t)},__get_render_stroke_color:function(t){return this.__override_stroke_color?this.__override_stroke_color:this.__collision_tags_to_color(this.__collision_tags_val,t)},set_debug_render_colors:function(t,i){this.__override_fill_color=t,this.__override_stroke_color=i;},__override_fill_color:null,__override_stroke_color:null,__collision_tags_to_color:function(t,i){let e=Math.round(Math.abs(Math.sin(t))*255),s=Math.round(Math.abs(Math.cos(t))*255),n=Math.round(e^s);return "rgba("+e+","+s+","+n+","+i+")"},set_data:function(t){return this.__data=t,this},get_data:function(){return this.__data},get_name:function(){return this.__type},render_aabb:function(t,i){let e=this.get_aabb();t.beginPath(),t.rect(e.position.x-i.x,e.position.y-i.y,e.size.x,e.size.y),t.lineWidth="1",t.strokeStyle="rgba(50, 175, 45, 0.5)",t.stroke();},set_position:function(t){return this.__position.x=t.x,this.__position.y=t.y,this.__update_position(),this},get_position:function(){return this.__position.clone()},move:function(t){return this.set_position(this.__position.add(t)),this},__update_position:function(){this.__update_position_hook&&this.__update_position_hook(),this.__aabb&&this.__update_aabb_pos(),this.__update_parent_world();},__update_aabb_pos:function(){this.__aabb.position=this.__position;},get_abs_center:function(){let t=this.get_aabb();return t.position.add(t.size.multiply_scalar(.5))},reset_aabb:function(){this.__aabb=void 0;},__update_parent_world:function(){this.__world&&this.__world.__update_shape_grid(this);},__update_position_hook:null,render:function(){throw new _.NotImplementedError("")},build_aabb:function(){throw new _.NotImplementedError("")},get_aabb:function(){return this.__aabb=this.__aabb||this.build_aabb(),this.__aabb}};_.CompositeShape=function(t,i){this.init(),this.__init_comp_shape(t,i);};_.CompositeShape.prototype={__type:"composite-shape",__collision_type:"composite-shape",__init_comp_shape:function(t,i){if(this.__shapes=[],t=t||_.Vector.ZERO,this.set_position(t),i)for(let e=0;e<i.length;++e)this.add(i[e]);},render:function(t,i){for(let e=0;e<this.__shapes.length;++e)this.__shapes[e].shape.render(t,i);},repel:function(t,i,e,s,n){let o=_.Vector.ZERO.clone();for(let l=0;l<this.__shapes.length;++l){let h=this.__shapes[l].shape;h.test_collide_with(t)&&o.add_self(h.repel(t,i,e,0,n));}return (s||0)!==0&&this.move(o.multiply_scalar(s*-1)),o},set_debug_render_colors:function(t,i){this.__override_fill_color=t,this.__override_stroke_color=i;for(let e=0;e<this.__shapes.length;++e)this.__shapes[e].shape.set_debug_render_colors(t,i);},get_shapes:function(){if(this.__shapes_list_c)return this.__shapes_list_c;let t=[];for(let i=0;i<this.__shapes.length;++i)t.push(this.__shapes[i].shape);return this.__shapes_list_c=t,t},build_aabb:function(){if(this.__shapes.length===0)return this.__aabb_pos_offset_c=_.Vector.ZERO,new _.AABB(_.Vector.ZERO,_.Vector.ZERO);let t=null;for(let i=0;i<this.__shapes.length;++i){let e=this.__shapes[i].shape.get_aabb();t?t.expand(e):t=e;}return this.__aabb_pos_offset_c=t.position.sub(this.__position),t},__update_aabb_pos:function(){this.__aabb.position=this.__position.add(this.__aabb_pos_offset_c);},add:function(t){if(t.__world)throw new _.IllegalActionError("Can't add shape with collision world to a composite shape!");let i=t.__position;return this.__shapes_list_c=void 0,this.__shapes.push({shape:t,offset:i.clone()}),t.set_position(this.__position.add(i)),this.reset_aabb(),this.__update_parent_world(),t.__collision_tags_val=this.__collision_tags_val,t.__collision_tags=this.__collision_tags,t.__override_fill_color=this.__override_fill_color,t.__override_stroke_color=this.__override_stroke_color,t},__update_tags_hook:function(){for(let t=0;t<this.__shapes;++t){let i=this.__shapes[t].shape;i.__collision_tags_val=this.__collision_tags_val,i.__collision_tags=this.__collision_tags;}},remove:function(t){this.__shapes_list_c=void 0;for(let i=0;i<this.__shapes.length;++i)if(this.__shapes[i].shape===t){this.__shapes.splice(i,1),this.__update_parent_world();return}throw new _.IllegalActionError("Shape to remove is not in composite shape!")},__update_position_hook:function(){for(let t=0;t<this.__shapes.length;++t)this.__shapes[t].shape.set_position(this.__position.add(this.__shapes[t].offset));}};_.extend(_.Shape.prototype,_.CompositeShape.prototype);_.Capsule=function(t,i,e){this.init(),e===void 0&&(e=!0);let s=[];e?(i=i.clone(),i.y-=i.x,s.push(new _.Rectangle(new _.Vector(-i.x*.5,-i.y*.5),i)),s.push(new _.Circle(new _.Vector(0,-i.y*.5),i.x*.5)),s.push(new _.Circle(new _.Vector(0,i.y*.5),i.x*.5))):(i=i.clone(),i.y-=i.x,s.push(new _.Rectangle(new _.Vector(-i.y*.5,-i.x*.5),i.flip())),s.push(new _.Circle(new _.Vector(-i.y*.5,0),i.x*.5)),s.push(new _.Circle(new _.Vector(i.y*.5,0),i.x*.5))),this.__init_comp_shape(t,s);};_.Capsule.prototype={__type:"capsule"};_.extend(_.CompositeShape.prototype,_.Capsule.prototype);_.Circle=function(t,i){this.init(),this.__radius=i,this.__size=new _.Vector(i,i).multiply_scalar_self(2),this.set_position(t);};_.Circle.prototype={__type:"circle",__collision_type:"circle",render:function(t,i){let e=this.__position.sub(i);t.beginPath(),t.arc(e.x,e.y,this.__radius,0,2*Math.PI,!1),t.lineWidth="7",t.strokeStyle=this.__get_render_stroke_color(.75),t.stroke(),t.fillStyle=this.__get_render_fill_color(.35),t.fill();},get_radius:function(){return this.__radius},__update_aabb_pos:function(){this.__aabb.position=this.__position.sub_scalar(this.__radius);},build_aabb:function(){return new _.AABB(this.__position.sub_scalar(this.__radius),this.__size)},get_abs_center:function(){return this.__position.clone()}};_.extend(_.Shape.prototype,_.Circle.prototype);_.Line=function(t,i){this.init(),this.__dest=i,this.set_position(t);};_.Line.prototype={__type:"line",__collision_type:"line",render:function(t){t.beginPath(),t.moveTo(this.__position.x,this.__position.y);let i=this.__position.add(this.__dest);t.lineTo(i.x,i.y),t.lineWidth="7",t.strokeStyle=this.__get_render_stroke_color(.75),t.stroke();},build_aabb:function(){let t=new _.Vector(0,0);t.x=this.__dest.x>0?this.__position.x:this.__position.x+this.__dest.x,t.y=this.__dest.y>0?this.__position.y:this.__position.y+this.__dest.y;let i=this.__dest.apply(Math.abs);return new _.AABB(t,i)},get_p1:function(){return this.__p1_c=this.__p1_c||this.__position.clone(),this.__p1_c},get_p2:function(){return this.__p2_c=this.__p2_c||this.__position.add(this.__dest),this.__p2_c},__update_position_hook:function(){this.__p1_c=void 0,this.__p2_c=void 0;}};_.extend(_.Shape.prototype,_.Line.prototype);_.LineStrip=function(t,i,e){if(this.init(),this.__points=i,i.length<=1)throw new _.IllegalActionError("Not enough vectors for LineStrip (got to have at least two vectors)");e&&this.__points.push(this.__points[0]),this.set_position(t);};_.LineStrip.prototype={__type:"line-strip",__collision_type:"line-strip",render:function(t){let i;t.beginPath();for(let e=0;e<this.__points.length-1;++e){let s=this.__position.add(this.__points[e]);i=this.__position.add(this.__points[e+1]),t.moveTo(s.x,s.y),t.lineTo(i.x,i.y);}t.moveTo(i.x,i.y),i=this.__position.add(this.__points[this.__points.length-1]),t.lineTo(i.x,i.y),t.lineWidth="7",t.strokeStyle=this.__get_render_stroke_color(.75),t.stroke();},get_abs_lines:function(){if(this.__abs_lines_c)return this.__abs_lines_c;let t=this.get_abs_points(),i=[];for(let e=0;e<t.length-1;e++)i.push([t[e],t[e+1]]);return this.__abs_lines_c=i,i},get_abs_points:function(){if(this.__abs_points_c)return this.__abs_points_c;let t=[];for(let i=0;i<this.__points.length;i++)t.push(this.__points[i].add(this.__position));return this.__abs_points_c=t,t},__update_position_hook:function(){this.__abs_points_c=void 0,this.__abs_lines_c=void 0;},__update_aabb_pos:function(){this.__aabb.position.set(this.__aabb_offset_c.add(this.__position));},build_aabb:function(){let t=new _.AABB(_.Vector.ZERO,_.Vector.ZERO);for(let i=0;i<this.__points.length;++i)t.add_vector(this.__points[i]);return this.__aabb_offset_c=t.position.clone(),t.position.add_self(this.__position),t}};_.extend(_.Shape.prototype,_.LineStrip.prototype);_.Rectangle=function(t,i){this.init(),this.__size=i,this.set_position(t);};_.Rectangle.prototype={__type:"rectangle",__collision_type:"rectangle",render:function(t,i){let e=this.__position.sub(i);t.beginPath(),t.rect(e.x,e.y,this.__size.x,this.__size.y),t.lineWidth="7",t.strokeStyle=this.__get_render_stroke_color(.75),t.stroke(),t.fillStyle=this.__get_render_fill_color(.35),t.fill();},get_size:function(){return this.__size.clone()},build_aabb:function(){return new _.AABB(this.__position,this.__size)},get_top_left:function(){return this.__top_left_c=this.__top_left_c||this.__position.clone(),this.__top_left_c},get_bottom_left:function(){return this.__bottom_left_c=this.__bottom_left_c||this.__position.add(new _.Vector(0,this.__size.y)),this.__bottom_left_c},get_top_right:function(){return this.__top_right_c=this.__top_right_c||this.__position.add(new _.Vector(this.__size.x,0)),this.__top_right_c},get_bottom_right:function(){return this.__bottom_right_c=this.__bottom_right_c||this.__position.add(new _.Vector(this.__size.x,this.__size.y)),this.__bottom_right_c},get_abs_center:function(){return this.__abs_center_c=this.__abs_center_c||this.__position.add(this.__size.divide_scalar(2)),this.__abs_center_c},__update_position_hook:function(){this.__top_left_c=void 0,this.__top_right_c=void 0,this.__bottom_left_c=void 0,this.__bottom_right_c=void 0,this.__abs_center_c=void 0;}};_.extend(_.Shape.prototype,_.Rectangle.prototype);_.CollisionManager={test_collision:function(t,i){if(t instanceof _.Vector&&i instanceof _.Vector)return this._test_collision_vector_vector(t,i);if(t.__collision_type=="composite-shape")return this._test_collision_composite_shape(t,i);if(i.__collision_type=="composite-shape")return this._test_collision_composite_shape(i,t);if(t instanceof _.Vector&&i.__collision_type=="circle")return this._test_collision_circle_vector(i,t);if(t.__collision_type=="circle"&&i instanceof _.Vector)return this._test_collision_circle_vector(t,i);if(t.__collision_type=="circle"&&i.__collision_type=="circle")return this._test_collision_circle_circle(i,t);if(t.__collision_type=="circle"&&i.__collision_type=="rectangle")return this._test_collision_circle_rect(t,i);if(t.__collision_type=="rectangle"&&i.__collision_type=="circle")return this._test_collision_circle_rect(i,t);if(t.__collision_type=="circle"&&i.__collision_type=="line")return this._test_collision_circle_line(t,i);if(t.__collision_type=="line"&&i.__collision_type=="circle")return this._test_collision_circle_line(i,t);if(t.__collision_type=="line-strip"&&i.__collision_type=="line")return this._test_collision_linestrip_line(t,i);if(t.__collision_type=="line"&&i.__collision_type=="line-strip")return this._test_collision_linestrip_line(i,t);if(t.__collision_type=="circle"&&i.__collision_type=="line-strip")return this._test_collision_circle_linestrip(t,i);if(t.__collision_type=="line-strip"&&i.__collision_type=="circle")return this._test_collision_circle_linestrip(i,t);if(t instanceof _.Vector&&i.__collision_type=="rectangle")return this._test_collision_rect_vector(i,t);if(t.__collision_type=="rectangle"&&i instanceof _.Vector)return this._test_collision_rect_vector(t,i);if(t.__collision_type=="rectangle"&&i.__collision_type=="rectangle")return this._test_collision_rect_rect(i,t);if(t.__collision_type=="line-strip"&&i.__collision_type=="line-strip")return this._test_collision_linestrip_linestrip(t,i);if(t.__collision_type=="line"&&i.__collision_type=="rectangle")return this._test_collision_rect_line(i,t);if(t.__collision_type=="rectangle"&&i.__collision_type=="line")return this._test_collision_rect_line(t,i);if(t.__collision_type=="line-strip"&&i.__collision_type=="rectangle")return this._test_collision_rect_linestrip(i,t);if(t.__collision_type=="rectangle"&&i.__collision_type=="line-strip")return this._test_collision_rect_linestrip(t,i);if(t.__collision_type=="line"&&i.__collision_type=="line")return this._test_collision_line_line(t,i);if(t.__collision_type=="line"&&i instanceof _.Vector)return this._test_collision_vector_line(i,t);if(t instanceof _.Vector&&i.__collision_type=="line")return this._test_collision_vector_line(t,i);if(t.__collision_type=="line-strip"&&i instanceof _.Vector)return this._test_collision_vector_linestrip(i,t);if(t instanceof _.Vector&&i.__collision_type=="line-strip")return this._test_collision_vector_linestrip(t,i);throw new _.UnsupportedShapes(t,i)},_test_collision_vector_vector:function(t,i){return t.x===i.x&&t.y===i.y},_test_collision_circle_vector:function(t,i){return _.Math.distance(t.__position,i)<=t.__radius},_test_collision_circle_circle:function(t,i){return _.Math.distance(t.__position,i.__position)<=t.__radius+i.__radius},_test_collision_rect_vector:function(t,i){return i.x>=t.__position.x&&i.y>=t.__position.y&&i.x<=t.__position.x+t.__size.x&&i.y<=t.__position.y+t.__size.y},_test_collision_vector_line:function(t,i){return _.Math.is_on_line(t,i.get_p1(),i.get_p2())},_test_collision_vector_linestrip:function(t,i){let e=i.get_abs_lines();for(let s=0;s<e.length;++s)if(_.Math.is_on_line(t,e[s][0],e[s][1]))return !0;return !1},_test_collision_circle_line:function(t,i){return _.Math.distance_to_line(t.__position,i.get_p1(),i.get_p2())<=t.__radius},_test_collision_circle_linestrip:function(t,i){let e=i.get_abs_lines();for(let s=0;s<e.length;++s)if(_.Math.distance_to_line(t.__position,e[s][0],e[s][1])<=t.__radius)return !0;return !1},_test_collision_linestrip_line:function(t,i){let e=t.get_abs_lines(),s=i.get_p1(),n=i.get_p2();for(let o=0;o<e.length;++o)if(_.Math.line_intersects(s,n,e[o][0],e[o][1]))return !0;return !1},_test_collision_line_line:function(t,i){return _.Math.line_intersects(t.get_p1(),t.get_p2(),i.get_p1(),i.get_p2())},_test_collision_rect_line:function(t,i){let e=i.get_p1(),s=i.get_p2();if(_.CollisionManager._test_collision_rect_vector(t,e)||_.CollisionManager._test_collision_rect_vector(t,s))return !0;let n=t.get_top_left(),o=t.get_bottom_left();if(_.Math.line_intersects(e,s,n,o))return !0;let l=t.get_top_right(),h=t.get_bottom_right();return !!(_.Math.line_intersects(e,s,l,h)||_.Math.line_intersects(e,s,n,l)||_.Math.line_intersects(e,s,o,h))},_test_collision_rect_linestrip:function(t,i){let e=i.get_abs_points();for(let r=0;r<e.length;++r)if(this._test_collision_rect_vector(t,e[r]))return !0;let s=t.get_top_left(),n=t.get_bottom_left(),o=t.get_top_right(),l=t.get_bottom_right(),h=i.get_abs_lines();for(let r=0;r<h.length;++r){let u=h[r][0],a=h[r][1];if(_.Math.line_intersects(u,a,s,n)||_.Math.line_intersects(u,a,o,l)||_.Math.line_intersects(u,a,s,o)||_.Math.line_intersects(u,a,n,l))return !0}return !1},_test_collision_linestrip_linestrip:function(t,i){let e=t.get_abs_lines(),s=i.get_abs_lines();for(let n=0;n<e.length;++n)for(let o=0;o<s.length;++o)if(_.Math.line_intersects(e[n][0],e[n][1],s[o][0],s[o][1]))return !0;return !1},_test_collision_composite_shape:function(t,i){let e=t.get_shapes();if(i.__collision_type=="composite-shape"){let s=i.get_shapes();for(let n=0;n<e.length;++n)for(let o=0;o<s.length;++o)if(_.CollisionManager.test_collision(e[n],s[o]))return !0}else for(let s=0;s<e.length;++s)if(_.CollisionManager.test_collision(e[s],i))return !0;return !1},_test_collision_circle_rect:function(t,i){let e=t.__position,s=_.CollisionManager._test_collision_rect_vector(i,e);if(s)return !0;let n=i.get_abs_center();if(s=_.CollisionManager._test_collision_circle_vector(t,n),s)return !0;let o=[];n.x>e.x?o.push([i.get_top_left(),i.get_bottom_left()]):o.push([i.get_top_right(),i.get_bottom_right()]),n.y>e.y?o.push([i.get_top_left(),i.get_top_right()]):o.push([i.get_bottom_left(),i.get_bottom_right()]);for(let l=0;l<o.length;++l)if(_.Math.distance_to_line(e,o[l][0],o[l][1])<=t.__radius)return !0;return !1},_test_collision_rect_rect:function(t,i){let e={left:t.__position.x,right:t.__position.x+t.__size.x,top:t.__position.y,bottom:t.__position.y+t.__size.y},s={left:i.__position.x,right:i.__position.x+i.__size.x,top:i.__position.y,bottom:i.__position.y+i.__size.y};return !(s.left>e.right||s.right<e.left||s.top>e.bottom||s.bottom<e.top)}};_.UnsupportedShapes=function(t,i){this.name="Unsupported Shapes",this.message="Unsupported shapes collision test! '"+t.get_name()+"' <-> '"+i.get_name()+"'.";};_.UnsupportedShapes.prototype=Error.prototype;_.AABB=function(t,i){this.position=t.clone(),this.size=i.clone();};_.AABB.prototype={expand:function(t){let i=Math.min(this.position.x,t.position.x),e=Math.min(this.position.y,t.position.y),s=Math.max(this.position.x+this.size.x,t.position.x+t.size.x),n=Math.max(this.position.y+this.size.y,t.position.y+t.size.y);this.position.x=i,this.position.y=e,this.size.x=s-i,this.size.y=n-e;},add_vector:function(t){let i=this.position.x-t.x;i>0&&(this.position.x-=i,this.size.x+=i);let e=this.position.y-t.y;e>0&&(this.position.y-=e,this.size.y+=e);let s=t.x-(this.position.x+this.size.x);s>0&&(this.size.x+=s);let n=t.y-(this.position.y+this.size.y);n>0&&(this.size.y+=n);},clone:function(){return new _.AABB(this.position,this.size)}};_.Math={};_.Math.to_radians=function(t){return t*Math.PI/180};_.Math.to_degrees=function(t){return t*180/Math.PI};_.Math.distance=function(t,i){let e=i.x-t.x,s=i.y-t.y;return Math.sqrt(e*e+s*s)};_.Math.dist2=function(t,i){let e=i.x-t.x,s=i.y-t.y;return e*e+s*s};_.Math.angle=function(t,i){let e=i.y-t.y,s=i.x-t.x;return Math.atan2(e,s)*180/Math.PI};_.Math.distance_to_line=function(t,i,e){let s=_.Math.dist2(i,e),n=((t.x-i.x)*(e.x-i.x)+(t.y-i.y)*(e.y-i.y))/s;return n<0?_.Math.distance(t,i):n>1?_.Math.distance(t,e):_.Math.distance(t,{x:i.x+n*(e.x-i.x),y:i.y+n*(e.y-i.y)})};_.Math.line_intersects=function(t,i,e,s){let n,o,l,h;n=i.x-t.x,o=i.y-t.y,l=s.x-e.x,h=s.y-e.y;let r,u;return r=(-o*(t.x-e.x)+n*(t.y-e.y))/(-l*o+n*h),u=(l*(t.y-e.y)-h*(t.x-e.x))/(-l*o+n*h),r>=0&&r<=1&&u>=0&&u<=1?1:0};_.Math.is_on_line=function(t,i,e){return _.Math.distance_to_line(t,i,e)<=5};_.Math.angles_dis=function(t,i){t=_.Math.to_radians(t),i=_.Math.to_radians(i);let e=Math.PI*2,s=(i-t)%e,n=2*s%e-s;return n=_.Math.to_degrees(n),Math.abs(n)};_.Vector=function(t,i){this.x=t,this.y=i;};_.Vector.prototype={get_name:function(){return "vector"},clone:function(){return new _.Vector(this.x,this.y)},set:function(t){this.x=t.x,this.y=t.y;},flip:function(){return new _.Vector(this.y,this.x)},flip_self:function(){return this.y=[this.x,this.x=this.y][0],this},negative:function(){return this.multiply_scalar(-1)},negative_self:function(){return this.multiply_scalar_self(-1),this},distance_from:function(t){return _.Math.distance(this,t)},angle_from:function(t){return _.Math.angle(this,t)},move:function(t){return this.x+=t.x,this.y+=t.y,this},normalize_self:function(){let t=Math.sqrt(this.x*this.x+this.y*this.y);return t===0?this:(this.x/=t,this.y/=t,this)},normalize:function(){return this.clone().normalize_self()},add_self:function(t){return this.x+=t.x,this.y+=t.y,this},sub_self:function(t){return this.x-=t.x,this.y-=t.y,this},divide_self:function(t){return this.x/=t.x,this.y/=t.y,this},multiply_self:function(t){return this.x*=t.x,this.y*=t.y,this},add_scalar_self:function(t){return this.x+=t,this.y+=t,this},sub_scalar_self:function(t){return this.x-=t,this.y-=t,this},divide_scalar_self:function(t){return this.x/=t,this.y/=t,this},multiply_scalar_self:function(t){return this.x*=t,this.y*=t,this},add:function(t){return this.clone().add_self(t)},sub:function(t){return this.clone().sub_self(t)},multiply:function(t){return this.clone().multiply_self(t)},divide:function(t){return this.clone().divide_self(t)},add_scalar:function(t){return this.clone().add_scalar_self(t)},sub_scalar:function(t){return this.clone().sub_scalar_self(t)},multiply_scalar:function(t){return this.clone().multiply_scalar_self(t)},divide_scalar:function(t){return this.clone().divide_scalar_self(t)},clamp:function(t,i){return this.x<t&&(this.x=t),this.y<t&&(this.y=t),this.x>i&&(this.x=i),this.y>i&&(this.y=i),this},from_radian:function(t){return this.x=Math.cos(t),this.y=Math.sin(t),this},from_angle:function(t){return this.from_radian(_.Math.to_radians(t))},apply_self:function(t){return this.x=t(this.x),this.y=t(this.y),this},apply:function(t){return this.clone().apply_self(t)},debug:function(){console.debug(this.x+", "+this.y);}};_.Vector.ZERO=new _.Vector(0,0);_.Vector.ONE=new _.Vector(1,1);_.Vector.UP=new _.Vector(0,-1);_.Vector.DOWN=new _.Vector(0,1);_.Vector.LEFT=new _.Vector(-1,0);_.Vector.RIGHT=new _.Vector(1,0);_.Vector.UP_LEFT=new _.Vector(-1,-1);_.Vector.DOWN_LEFT=new _.Vector(-1,1);_.Vector.UP_RIGHT=new _.Vector(1,-1);_.Vector.DOWN_RIGHT=new _.Vector(1,1);_.TilemapWorld=function(t,i){let e=i;e=e||{},e.grid_size=t,this.__tiles={},this.__init_world(e);};_.TilemapWorld.prototype={set_tile:function(t,i,e){let s=this.get_tile(t);if(!i){s&&(this.__set_tile_shape(t,null),this.remove(s));return}if(s===void 0){let n=this.__params.grid_size,o=t.multiply_scalar(n),l=new _.Vector(n,n);s=this.__add_tile_shape(new _.Rectangle(o,l),t),this.__set_tile_shape(t,s);}e!==void 0&&s.set_collision_tags(e);},__add_tile_shape:function(t,i){this.__grid[i.x]=this.__grid[i.x]||{},this.__grid[i.x][i.y]=this.__grid[i.x][i.y]||[];let e=this.__grid[i.x][i.y];return e.push(t),t.__grid_chunks=[e],t.__world=this,t.__grid_bounderies={min_x:i.x,min_y:i.y,max_x:i.x,max_y:i.y},this.__all_shapes[t.get_id()]=t,t},set_from_matrix:function(t){let i=new _.Vector(0,0);for(let e=0;e<t.length;++e){i.x=0;for(let s=0;s<t[e].length;++s)this.set_tile(i,t[e][s],null),i.x++;i.y++;}},get_tile:function(t){return this.__tiles[t.x+"_"+t.y]},__set_tile_shape:function(t,i){i===null?delete this.__tiles[t.x+"_"+t.y]:this.__tiles[t.x+"_"+t.y]=i;}};_.extend(_.World.prototype,_.TilemapWorld.prototype);var k=chunkNQC62GKA_cjs.b(V(),1),b="ADD",M="REMOVE",w=class{world;emitter=new k.EventEmitter;getType(){return w.name}constructor(){this.world=new _.World;}onAdd(i){return this.emitter.on(b,i),()=>{this.emitter.off(b,i);}}onRemove(i){return this.emitter.on(M,i),()=>{this.emitter.off(M,i);}}register(i){this.world.add(i),this.emitter.emit(b,i);}unregister(i){this.world.remove(i),this.emitter.emit(M,i);}getObjectAt({x:i,y:e}){let s=this.world.pick_object(new _.Vector(i,e));return s?s.get_data():null}getObjectsAt({x:i,y:e}){let s=[],n=new _.Vector(i,e);return this.world.test_collision(n,void 0,s),s.map(o=>o?o.get_data():null)}getObjectIn({x:i,y:e},s){let n=[],o=new _.Circle(new _.Vector(i,e),s);return this.world.test_collision(o,void 0,n),n.map(l=>l?l.get_data():null)}getWorld(){return this.world}};

exports.a = _;
exports.b = w;
//# sourceMappingURL=out.js.map
//# sourceMappingURL=chunk-5LBDM7HS.cjs.map