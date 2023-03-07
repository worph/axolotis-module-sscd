/*
 * Provide simple inheritance (extend prototype)
 * Author: Ronen Ness, 2015
 */

// inherit base into child
// base / child must be object's prototype (eg SSCD.something.prototype)
// NOTE: don't use javascript built-ins so you won't mess up their prototypes.
import {SSCD} from "../sscdNameSpace"

SSCD.extend = function(base, child) {

	// copy all properties
	for (let prop in base) {
		if (child[prop])
			continue;

		child[prop] = base[prop];
	}

	// create inits list (constructors)
	// this creates a function namd .init() that will call all the __init__() functions in the inheritance chain by the order it was extended.
	child.__inits = child.__inits || [];

	// add parent init function
	if (base.__init__) {
		child.__inits.push(base.__init__);
	}

	// set init function
	child.init = function() {
		for (let i = 0; i < this.__inits.length; ++i) {
			this.__curr_init_func = this.__inits[i];
			this.__curr_init_func();
		}
		delete this.__curr_init_func;
	};
};

// for not-implemented exceptions
SSCD.NotImplementedError = function(message) {
	this.name = "NotImplementedError";
	this.message = (message || "");
};
SSCD.NotImplementedError.prototype = Error.prototype;
