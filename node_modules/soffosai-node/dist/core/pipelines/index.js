"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "AskADocumentPipeline", {
  enumerable: true,
  get: function get() {
    return _ask_a_document["default"];
  }
});
Object.defineProperty(exports, "FileIngestPipeline", {
  enumerable: true,
  get: function get() {
    return _ingest_a_file["default"];
  }
});
Object.defineProperty(exports, "SoffosPipeline", {
  enumerable: true,
  get: function get() {
    return _pipeline.Pipeline;
  }
});
var _pipeline = require("./pipeline.js");
var _ask_a_document = _interopRequireDefault(require("./basic_pipelines/ask_a_document.js"));
var _ingest_a_file = _interopRequireDefault(require("./basic_pipelines/ingest_a_file.js"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }