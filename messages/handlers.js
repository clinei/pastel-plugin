"use strict";
window.messages_handlers = (function closure_messages_handlers() {

	function _handleChat(data) {
		const container = window.messages_elements.createContainer(data);

		const date = window.messages_elements.createDate(data);
		const nick = window.messages_elements.createNick(data);
		const message = window.messages_elements.createMessage(data);

		container.appendChild(date);
		container.appendChild(nick);
		container.appendChild(message);

		window.messages_elements.appendToWindow(container);
	}
	function _handlePersonalWindow(data) {
		const container = window.messages_elements.createContainer(data);

		const date = window.messages_elements.createDate(data);
		const nick = window.messages_elements.createNick(data);
		const message = window.messages_elements.createMessage(data);

		container.appendChild(date);
		container.appendChild(nick);
		container.appendChild(message);

		window.messages_elements.appendToWindow(container);
	}
	function _handlePersonal(data) {
		const container = window.messages_elements.createContainer(data);

		const date = window.messages_elements.createDate(data);
		const nick = window.messages_elements.createNick(data);
		const message = window.messages_elements.createMessage(data);

		container.appendChild(date);
		container.appendChild(nick);
		container.appendChild(message);

		window.messages_elements.appendToWindow(container);
	}
	function _handleGeneric(data) {
		const container = window.messages_elements.createContainer(data);

		const date = window.messages_elements.createDate(data);
		const message = window.messages_elements.createMessage(data);

		container.appendChild(date);
		container.appendChild(message);

		window.messages_elements.appendToWindow(container);
	}
	function _handleUnknown(data) {
		console.log(data);
	}

	return {
		handleChat: _handleChat,
		handlePersonalWindow: _handlePersonalWindow,
		handlePersonal: _handlePersonal,
		handleGeneric: _handleGeneric,
		handleUnknown: _handleUnknown,
	};


}());
