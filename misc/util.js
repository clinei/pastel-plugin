"use strict";

function shallowCopy(obj) {
	let copy = {};

	for (let key in obj) {
		copy[key] = obj[key];
	}

	return copy;
}

function inplaceCopy(target, obj) {
	for (let prop in obj) {
		target[prop] = obj[prop];
	}
}

function clear(target) {
	for (let key in target) {
		Reflect.deleteProperty(target, key);
	}
}

module.exports = {
	shallowCopy: shallowCopy,
	inplaceCopy: inplaceCopy,
	clear: clear,
};
