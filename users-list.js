"use strict";
window.users_list = (function closure_users_list() {

	const users_list = document.getElementById("users-list");
	const active_list = document.getElementById("users-active");
	const absent_list = document.getElementById("users-absent");

	function generateUserId(user) {
		return "users-\uE000-".concat(user.id);
	}
	function findUserListItemElement(user) {
		return document.getElementById(generateUserId(user));
	}
	function makeUserListItemElement(user) {
		const element = document.createElement("li");
		element.setAttribute("id", generateUserId(user));
		return element;
	}

	function startTransition() {
		users_list.classList.add("transiting");
		users_list.classList.toggle("opened");
		users_list.classList.toggle("closed");

		// get height
		const height = users_list.getBoundingClientRect().height.toString(10).concat("px");
		if (users_list.classList.contains("opened")) {
			// force specific height
			users_list.style.height = "0px";
			// move into view
			users_list.style.top = "auto";
			users_list.style.bottom = "40px";
			// force repaint
			users_list.getBoundingClientRect();
			// transition
			users_list.style.transitionProperty = "height, border-right-width, border-left-width, padding-top, padding-bottom";
			users_list.style.height = height;
			users_list.style.borderWidth = "4px";
			users_list.style.padding = "10px";
		} else if (users_list.classList.contains("closed")) {
			// force specific height
			users_list.style.height = height;
			// force repaint
			users_list.getBoundingClientRect();
			// transition
			users_list.style.transitionProperty = "height, border-right-width, border-left-width, padding-top, padding-bottom";
			users_list.style.height = "0px";
			users_list.style.borderWidth = "0px 4px";
			users_list.style.padding = "0px 10px";
		}
	}
	function finishTransition() {
		if (users_list.classList.contains("opened")) {
			// transition
			users_list.style.transitionProperty = "none";
			// let the height change
			users_list.style.height = "auto";
		}
		if (users_list.classList.contains("closed")) {
			// transition
			users_list.style.transitionProperty = "none";
			// let the height change
			users_list.style.height = "auto";
			// move ouf of view
			users_list.style.top = "100%";
			users_list.style.bottom = "auto";
		}

		users_list.classList.remove("transiting");
	}

	document.getElementById("users-toggle").addEventListener("click", _toggle);
	users_list.classList.remove("unaltered");
	users_list.style.borderWidth = "0px 4px";
	users_list.style.padding = "0px 10px";
	users_list.style.transitionProperty = "none";
	users_list.style.top = "100%";
	users_list.style.bottom = "auto";
	users_list.style.height = "auto";


	function _append(user) {
		if (findUserListItemElement(user) !== null) {
			return false;
		}

		const element = makeUserListItemElement(user);

		element.textContent = user.nick;
		if (user.active === true) {
			active_list.appendChild(element);
		} else {
			absent_list.appendChild(element);
		}
		return true;
	}
	function _changeList(user) {
		const element = findUserListItemElement(user);
		if (element !== null) {
			if (user.active === true) {
				absent_list.removeChild(element);
				active_list.appendChild(element);
			} else {
				active_list.removeChild(element);
				absent_list.appendChild(element);
			}
			return true;
		} else {
			return false;
		}
	}
	function _changeNick(user) {
		const element = findUserListItemElement(user);
		if (element !== null) {
			element.textContent = user.nick;
			return true;
		} else {
			return false;
		}
	}
	function _remove(user) {
		const element = findUserListItemElement(user);
		if (element !== null) {
			if (user.active === true) {
				active_list.removeChild(element);
			} else {
				absent_list.removeChild(element);
			}
		}
		return true;
	}

	function _toggle() {
		if (users_list.classList.contains("transiting")) {
			return;
		}

		startTransition();
		setTimeout(finishTransition, 500 +20);
	}

	return {
		append: _append,
		changeList: _changeList,
		changeNick: _changeNick,
		remove: _remove,

		toggle: _toggle,
	};


}());
