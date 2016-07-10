"use strict";
const util = require("../misc/util.js");

// plugins are enabled by default
function isEnabled(plugin) {
	return Reflect.has(plugin, "enabled") ? plugin["enabled"] : true;
}

function shouldCompile(plugin) {
	if (plugin instanceof Object) {
		if (isEnabled(plugin)) {
			return true;
		}
	}
	return false;
}

const PluginHost = (function PluginHost() {
	class PluginHostImpl {
		constructor(plugins) {
			if (plugins instanceof Array) {
				this.plugins = plugins;
			} else {
				this.plugins = [];
			}
			this.compiled = {};
			this.compileStates = [];
			this._base = null;
			this.compile();
		}
		compile() {
			this.clear();
			this.compileBase();
			for (let idx = 0; idx < this.plugins.length; idx += 1) {
				let plugin = this.plugins[idx];
				this.compileSingle(plugin);
			}
		}
		compileSingle(plugin) {
			if (this.compileStates.length >= 1) {
				this.compiled.parent = this.compileStates[this.compileStates.length - 1];
			}

			if (shouldCompile(plugin)) {
				util.inplaceCopy(this.compiled, plugin);
			}
			this.compileStates.push(util.shallowCopy(this.compiled));
		}
		compileBase() {
			this.compileSingle(this._base);
		}
		set base(base) {
			this._base = base;
			this.compile();
		}
		get base() {
			return this._base;
		}
		clear() {
			util.clear(this.compiled);
			this.compileStates.length = 0;
		}
		reset() {
			this.plugins.length = 0;
			this.clear();
			this.compileBase();
		}
		add(plugin) {
			this.plugins.push(plugin);
			this.compileSingle(plugin);
		}
		remove(plugin) {
			let idx = this.plugins.indexOf(plugin);
			if (idx >= 0) {
				this.plugins.splice(idx, 1);
			}
			this.compile();
		}
	}
	return PluginHostImpl;
}());

module.exports = {
	PluginHost: PluginHost,
};
