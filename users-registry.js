window.users_registry = (function closure_users_registry() { "use strict";

var users = new Map();
function hasUserId(user_id) {
	return users.has(user_id);
}

function _append(user_id, user) {
	if (hasUserId(user_id)) {
		return false;
	} else {
		users.set(user_id, user);
		window.users_list.append(user);
		return true;
	}
}
function _change(user_id, user) {
	if (hasUserId(user_id)) {
		var old_user = users.get(user_id);
		if (old_user.active !== user.active) {
			window.users_list.changeList(user);
		}
		if (old_user.nick !== user.nick) {
			window.users_list.changeNick(user);
		}
		users.set(user_id, user);
		return true;
	} else {
		return false;
	}
}
function _modify(user_id, user) {
	if (hasUserId(user_id)) {
		return _change(user_id, user);
	} else {
		return _append(user_id, user);
	}
}
function _remove(user_id) {
	if (hasUserId(user_id)) {
		window.users_list.remove(users.get(user_id));
		users.delete(user_id);
		return true;
	} else {
		return false;
	}
}

function _getUserNick(user_id) {
	var nick = "Alucardlegolas";
	users.forEach(function __forEach_users(value, key) {
		if (key === user_id) {
			nick = value.nick;
		}
	});
	return nick;
}

return {
	append: _append,
	change: _change,
	modify: _modify,
	remove: _remove,

	getUserNick: _getUserNick,
};


}());
