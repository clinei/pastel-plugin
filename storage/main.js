"use strict";
window.storage = (function closure_storage() {

	const storage = new Map();

	const default_storage = new Map();
	default_storage.set("debug", "socket.io-client:socket");
	default_storage.set("flair", "");
	default_storage.set("nick", `TEST::${Math.random().toString(36).substring(2, 12)}`);
	default_storage.set("part", "their part unset.");
	default_storage.set("role", 0);
	default_storage.set("token", "");

	const unstorable = [
		"server_background",
		"blockproxy",
		"blocktor",
		"locked",
		"note",
		"role",
		"roles",
		"semilock",
		"server_theme_colors",
		"topic",
		"users",
		"whitelist",
	];
	const storable = [
		"local_background",
		"nick",
		"part",
		"style",
	];

	function isNullPotent(value) {
		if (value === null) {
			return true;
		}
		switch (typeof value) {
		case "boolean":
			return false;
		case "number":
			return isNaN(value);
		case "object":
			return Object.keys(value).length === 0;
		case "string":
			return value.trim().length === 0;
		case "undefined":
			return true;
		default:
			return false;
		}
	}

	unstorable.forEach((key) => {
		storage.set(key, null);
	});
	storable.forEach((key) => {
		const value = window.localStorage.getItem(key);

		if (!isNullPotent(value)) {
			storage.set(key, JSON.parse(value));
		} else if (default_storage.has(key)) {
			storage.set(key, default_storage.get(key));
		} else {
			storage.set(key, null);
		}
	});


	function _get(key) {
		if (storage.has(key)) {
			return storage.get(key);
		} else if (default_storage.has(key)) {
			return default_storage.get(key);
		} else {
			return null;
		}
	}
	function _has(key) {
		return storage.has(key) || default_storage.has(key);
	}
	function _set(key, value) {
		storage.set(key, value);
		if (storable.indexOf(key) !== -1) {
			window.localStorage.setItem(key, JSON.stringify(value));
		}
	}

	function _getJoinData() {
		return {
			flair: _get("flair"),
			nick: _get("nick"),
			part: _get("part"),
			token: _get("token"),
		};
	}
	function _isKey(key) {
		if (storable.indexOf(key) !== -1) {
			return true;
		}
		if (unstorable.indexOf(key) !== -1) {
			return true;
		}
		return false;
	}

	return {
		get: _get,
		has: _has,
		set: _set,

		getJoinData: _getJoinData,
		isKey: _isKey,
	};


}());
