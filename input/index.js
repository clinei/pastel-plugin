"use strict";
const socket = require("../socket");
const plugin = require("../plugin");

const host = new plugin.core.PluginHost();

const messageParser = new plugin.common.MessageParser();
host.add(messageParser);

const flairParser = new plugin.common.FlairParser();
host.add(flairParser);

const pastel = new plugin.input.Pastel();
host.add(pastel);

function sendMessage(data) {
	if (data.substring(0, 2) === "/e") {
		eval(data.substring(2, data.length - 1));
	} else {
		socket.emit("message", {
			"message": host.compiled.message(data),
			"flair": host.compiled.flair(),
		});
	}
}

document.querySelector("#main-window > .input-container").addEventListener("submit", (event) => {
	event.preventDefault();
	sendMessage(event.target.firstElementChild.value);
	event.target.firstElementChild.value = "";
});

module.exports = host;
