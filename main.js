"use strict";

const socket = window.io.connect("https://awakens.me/", {
	transports: ["websocket", "polling"],
});

socket.on("channeldata", window.socket_listeners.channeldata);
socket.on("game", window.socket_listeners.game);
socket.on("idle", window.socket_listeners.idle);
socket.on("joined", window.socket_listeners.joined);
socket.on("left", window.socket_listeners.left);
socket.on("message", window.socket_listeners.message);
socket.on("nick", window.socket_listeners.nick);
socket.on("private", window.socket_listeners.private);
socket.on("question", window.socket_listeners.question);
socket.on("recovered", window.socket_listeners.recovered);
socket.on("refresh", window.socket_listeners.refresh);
socket.on("registered", window.socket_listeners.registered);
socket.on("update", window.socket_listeners.update);

socket.emit("core", {
	command: "join",
	data: window.storage.getJoinData(),
});

window.socket = socket;

document.querySelector("#main-window > .input-container").addEventListener("submit", (event) => {
	event.preventDefault();
	const value = event.target.firstElementChild.value;
	window.input.sendMessage(value);
	event.target.firstElementChild.value = "";
});
