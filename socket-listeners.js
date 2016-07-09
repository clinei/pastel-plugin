window.socket_listeners = (function closure_socket_listeners() { "use strict";

function _channeldata(data) {
	console.log(data);
	if (data.users) {
		data.users.forEach(_joined);
	}
}
function _game(data) {
	console.log(data);
}
function _idle(data) {
	console.log(data);
}
function _joined(data) {
	// "${data.nick} joined"
	window.users_registry.append(data.id, {
		active: true,
		id: data.id,
		nick: data.nick,
	});
}
function _left(data) {
	// "${window.users_registry.getUserNick(data.id)} has left"
	window.users_registry.remove(data.id);
}
function _message(data) {
	switch (data.style) {
	case "chat":
		window.messages_handlers.handleChatMessage(data);
		break;
	case "personal-window":
		window.messages_handlers.handlePersonalWindowMessage(data);
		break;
	case "personal":
		window.messages_handlers.handlePersonalMessage(data);
		break;
	case "error":
	case "general":
	case "info":
	case "note":
		window.messages_handlers.handleGenericMessage(data);
		break;
	default:
		window.messages_handlers.handleUnknownMessage(data);
		break;
	}
}
function _nick(data) {
	// "${window.users_registry.getUserNick(data.id)} is now know ${data.nick}"
	window.users_registry.change(data.id, {
		active: true,
		id: data.id,
		nick: data.nick,
	});
}
function _private(data) {
	console.log(data);
}
function _question(data) {
	console.log(data);
}
function _recovered(data) {
	console.log(data);
}
function _refresh(data) {
	console.log(data);
}
function _registered(data) {
	console.log(data);
}
function _update(data) {
	console.log(data);
}

return {
	channeldata: _channeldata,
	game: _game,
	idle: _idle,
	joined: _joined,
	left: _left,
	message: _message,
	nick: _nick,
	private: _private,
	question: _question,
	recovered: _recovered,
	refresh: _refresh,
	registered: _registered,
	update: _update,
}


}());
