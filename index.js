"use strict";
require("./input");
const socket = require("./socket");
const storage = require("./storage");
require("./users");

socket.emit("core", {
	command: "join",
	data: storage.getJoinData(),
});
