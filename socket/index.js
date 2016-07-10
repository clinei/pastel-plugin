"use strict";
const listeners = require("./listeners");
const socket = window.io.connect("https://awakens.me/", {
	transports: ["websocket", "polling"],
});

Object.keys(listeners).forEach((event_name) => {
	socket.on(event_name, listeners[event_name]);
});

module.exports = socket;
