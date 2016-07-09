window.messages_handlers = (function closure_messages_handlers() { "use strict";

function _handleChatMessage(data) {
	var container = window.messages_elements.createContainerElement(data);

	var date = window.messages_elements.createDateElement(data);
	var nick = window.messages_elements.createNickElement(data);
	var message = window.messages_elements.createMessageElement(data);

	container.appendChild(date);
	container.appendChild(nick);
	container.appendChild(message);

	window.messages_elements.appendToWindow(container);
}
function _handlePersonalWindowMessage(data) {
	var container = window.messages_elements.createContainerElement(data);

	var date = window.messages_elements.createDateElement(data);
	var nick = window.messages_elements.createNickElement(data);
	var message = window.messages_elements.createMessageElement(data);

	container.appendChild(date);
	container.appendChild(nick);
	container.appendChild(message);

	window.messages_elements.appendToWindow(container);
}
function _handlePersonalMessage(data) {
	var container = window.messages_elements.createContainerElement(data);

	var date = window.messages_elements.createDateElement(data);
	var nick = window.messages_elements.createNickElement(data);
	var message = window.messages_elements.createMessageElement(data);

	container.appendChild(date);
	container.appendChild(nick);
	container.appendChild(message);

	window.messages_elements.appendToWindow(container);
}
function _handleGenericMessage(data) {
	var container = window.messages_elements.createContainerElement(data);

	var date = window.messages_elements.createDateElement(data);
	var message = window.messages_elements.createMessageElement(data);

	container.appendChild(date);
	container.appendChild(message);

	window.messages_elements.appendToWindow(container);
}
function _handleUnknownMessage(data) {
	console.log(data);
}

return {
	handleChatMessage: _handleChatMessage,
	handlePersonalWindowMessage: _handlePersonalWindowMessage,
	handlePersonalMessage: _handlePersonalMessage,
	handleGenericMessage: _handleGenericMessage,
	handleUnknownMessage: _handleUnknownMessage,
};


}());
