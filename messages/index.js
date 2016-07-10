"use strict";
const handlers = require("./handlers");

function handleMessageEvent(data) {
	switch (data.style) {
	case "chat":
		handlers.handleChat(data);
		break;
	case "personal-window":
		handlers.handlePersonalWindow(data);
		break;
	case "personal":
		handlers.handlePersonal(data);
		break;
	case "error":
	case "general":
	case "info":
	case "note":
		handlers.handleGeneric(data);
		break;
	default:
		handlers.handleUnknown(data);
		break;
	}
}

module.exports = {
	handleMessageEvent: handleMessageEvent,
};
