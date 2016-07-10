"use strict";
const elements = require("./elements.js");

function _handleChat(data) {
	const container = elements.createContainer(data);

	const date = elements.createDate(data);
	const nick = elements.createNick(data);
	const message = elements.createMessage(data);

	container.appendChild(date);
	container.appendChild(nick);
	container.appendChild(message);

	elements.appendToWindow(container);
}
function _handlePersonalWindow(data) {
	const container = elements.createContainer(data);

	const date = elements.createDate(data);
	const nick = elements.createNick(data);
	const message = elements.createMessage(data);

	container.appendChild(date);
	container.appendChild(nick);
	container.appendChild(message);

	elements.appendToWindow(container);
}
function _handlePersonal(data) {
	const container = elements.createContainer(data);

	const date = elements.createDate(data);
	const nick = elements.createNick(data);
	const message = elements.createMessage(data);

	container.appendChild(date);
	container.appendChild(nick);
	container.appendChild(message);

	elements.appendToWindow(container);
}
function _handleGeneric(data) {
	const container = elements.createContainer(data);

	const date = elements.createDate(data);
	const message = elements.createMessage(data);

	container.appendChild(date);
	container.appendChild(message);

	elements.appendToWindow(container);
}
function _handleUnknown(data) {
	console.log(data);
}

module.exports = {
	handleChat: _handleChat,
	handlePersonalWindow: _handlePersonalWindow,
	handlePersonal: _handlePersonal,
	handleGeneric: _handleGeneric,
	handleUnknown: _handleUnknown,
};
