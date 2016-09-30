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

const BasePluginHost = (function PluginHost() {
	const privates = new Map();

	class BasePluginHostImpl {
		constructor(plugins) {
			if (plugins instanceof Array) {
				privates.plugins = plugins;
			} else {
				privates.plugins = [];
			}

			this.add = this.add;
			this.reset = this.reset;
			this.remove = this.remove;
			this.at = this.at;
		}
		add(plugin) {
			privates.plugins.push(plugin);
		}
		remove(plugin) {
			const idx = this.plugins.indexOf(plugin);
			if (idx >= 0) {
				privates.plugins.splice(idx, 1);
			}
		}
		reset() {
			privates.plugins.length = 0;
		}
		at(index) {
			return privates.plugins[index];
		}
		get count() {
			return privates.plugins.length;
		}
	}
	return BasePluginHostImpl;
}());


const PluginHostStatic = (function PluginHostStatic() {
	class PluginHostStaticImpl extends BasePluginHost {
		constructor(plugins) {
			super();
			this.compiled = new Map();
			this.compileStates = [];
			this.compile();
		}
		compile() {
			this.clear();
			for (let idx = 0; idx < this.count; idx += 1) {
				const plugin = this.at(idx);
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
		clear() {
			util.clear(this.compiled);
			this.compileStates.length = 0;
		}
		reset() {
			super.reset();
			this.clear();
		}
		add(plugin) {
			super.add(plugin);
			this.compileSingle(plugin);
		}
		remove(plugin) {
			super.remove(plugin);
			this.compile();
		}
	}
	return PluginHostStaticImpl;
}());


const PluginHostDynamic = function PluginHostDynamic() {
	const handler = {
		get: function(target, key) {
			if (Reflect.has(target, key)) {
				return target[key];
			} else {
				let result;

				let i = target.count - 1;
				while (i >= 0) {
					let plugin = target.at(i);

					if (isEnabled(plugin)) {

						if (i >= 1) {

							let j = i;
							while (j >= 0) {
								let parent = target.at(j);

								if (Reflect.has(plugin, "parent")) {
									throw SyntaxError("Plugins shouldn't define a .parent property");
								}

								if (Reflect.has(parent, key)) {
									plugin.parent = parent;
									break;
								}

								j -= 1;
							}
						}

						result = plugin[key];

						if (Reflect.has(plugin, "parent")) {
							Reflect.deleteProperty(plugin, "parent");
						}
					}

					i -= 1;
				}

			return result;
			}
		},
	};
	const proxy = new Proxy(new BasePluginHost(), handler);

	return proxy;
};

module.exports = {
	PluginHost: PluginHostStatic,
};
