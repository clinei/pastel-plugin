"use strict";
const users = require("../users");
const message = require("../messages");
const storage = require("../storage");

function standardizeChannelDataKey(key) {
	switch (key) {
	case "background":
		return "server_background";
	case "themecolors":
		return "server_theme_colors";
	default:
		return key;
	}
}
function addUser(user) {
	users.append(user.id, {
		"active": true,
		"id": user.id,
		"nick": user.nick,
	});
}

function _channeldata(data) {
	console.log(data);
	Object.keys(data).forEach((key_) => {
		const key = standardizeChannelDataKey(key_);
		if (!storage.isKey(key)) {
			console.log("Unknown channel data key: %s", key);
		}
		if (key === "users") {
			data.users.forEach(addUser);
		}
		storage.set(key, data[key]);
	});
}
function _game(data) {
	console.log(data);
}
function _idle(data) {
	console.log(data);
}
function _joined(data) {
	// "${data.nick} joined"
	addUser(data);
}
function _left(data) {
	// "${users.getUserNick(data.id)} has left"
	users.remove(data.id);
}
function _message(data) {
	message.handleMessageEvent(data);
}
function _nick(data) {
	// "${users.getUserNick(data.id)} is now know ${data.nick}"
	users.change(data.id, {
		"active": true,
		"id": data.id,
		"nick": data.nick,
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

module.exports = {
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
};
