"use strict";
const socket = require("../socket");

document.querySelector("#main-window > .input-container").addEventListener("submit", (event) => {
	event.preventDefault();
	socket.emit("message", {
		"message": event.target.firstElementChild.value,
		"flair": "flair",
	});
	event.target.firstElementChild.value = "";
});
