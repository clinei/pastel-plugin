"use strict";
const plugin = require("../plugin");

const host = new plugin.core.PluginHost();

const messageParser = new plugin.common.MessageParser();
host.add(messageParser);

/*
const randomColorWrap = new plugin.output.RandomColorWrap();
host.add(randomColorWrap);
*/

module.exports = host;
