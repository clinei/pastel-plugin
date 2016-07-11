"use strict";
require("./input");
const plugin = require("./plugin");
const socket = require("./socket");
const storage = require("./storage");
const output = require("./output");
const input = require("./input");
require("./users");

socket.emit("core", {
	command: "join",
	data: storage.compiled.getJoinData(),
});

global.aw2 = {
	storage: storage,
	input: input,
	output: output,
	plugin: plugin,
};
