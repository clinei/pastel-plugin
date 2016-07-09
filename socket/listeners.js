"use strict";
window.socket_listeners = (function closure_socket_listeners() {

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
		window.users_registry.append(user.id, {
			"active": true,
			"id": user.id,
			"nick": user.nick,
		});
	}

	function _channeldata(data) {
		console.log(data);
		Object.keys(data).forEach((key_) => {
			const key = standardizeChannelDataKey(key_);
			if (!window.storage.isKey(key)) {
				console.log("Unknown channel data key: %s", key);
			}
			if (key === "users") {
				data.users.forEach(addUser);
			}
			window.storage.set(key, data[key]);
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
		// "${window.users_registry.getUserNick(data.id)} has left"
		window.users_registry.remove(data.id);
	}
	function _message(data) {
		switch (data.style) {
		case "chat":
			window.messages_handlers.handleChat(data);
			break;
		case "personal-window":
			window.messages_handlers.handlePersonalWindow(data);
			break;
		case "personal":
			window.messages_handlers.handlePersonal(data);
			break;
		case "error":
		case "general":
		case "info":
		case "note":
			window.messages_handlers.handleGeneric(data);
			break;
		default:
			window.messages_handlers.handleUnknown(data);
			break;
		}
	}
	function _nick(data) {
		// "${window.users_registry.getUserNick(data.id)} is now know ${data.nick}"
		window.users_registry.change(data.id, {
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
	};


}());
