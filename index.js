"use strict";
require("./input");
const socket = require("./socket");
const storage = require("./storage");
const output = require("./output");
const input = require("./input");
const plugin = require("./plugin");
require("./users");

socket.emit("core", {
	command: "join",
	data: storage.getJoinData(),
});

global.aw2 = {
	input: input,
	output: output,
	plugin: plugin,
};
