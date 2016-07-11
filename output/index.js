"use strict";
const plugin = require("../plugin");

const host = new plugin.core.PluginHost();

const messageParser = new plugin.common.MessageParser();
host.add(messageParser);

const formatParser = new plugin.output.FormatParser();
host.add(formatParser);

module.exports = host;
