"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DocumentsIngestIO = exports.DocumentSearchIO = exports.DocumentDeleteIO = void 0;
var _service_io = _interopRequireDefault(require("./service_io.js"));
var _constants = require("../constants.js");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }
function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }
var DocumentsIngestIO = /*#__PURE__*/function (_ServiceIO) {
  _inherits(DocumentsIngestIO, _ServiceIO);
  var _super = _createSuper(DocumentsIngestIO);
  function DocumentsIngestIO() {
    var _this;
    _classCallCheck(this, DocumentsIngestIO);
    _this = _super.call(this);
    _this.service = _constants.ServiceString.DOCUMENTS_INGEST;
    _this.required_input_fields = ["name"];
    _this.require_one_of_choices = [["text", "tagged_elements"]];
    _this.defaults = ["text"];
    _this.optional_input_fields = ["meta"];
    _this.input_structure = {
      "name": "string",
      "meta": "object",
      "text": "string",
      "tagged_elements": ["object", "object"]
    };
    // output_fields = ["success", "document_id"]
    _this.output_structure = {
      "success": "boolean",
      "document_id": "string"
    };
    _this.primary_output_field = "document_id";
    return _this;
  }
  return _createClass(DocumentsIngestIO);
}(_service_io["default"]);
exports.DocumentsIngestIO = DocumentsIngestIO;
var DocumentSearchIO = /*#__PURE__*/function (_ServiceIO2) {
  _inherits(DocumentSearchIO, _ServiceIO2);
  var _super2 = _createSuper(DocumentSearchIO);
  function DocumentSearchIO() {
    var _this2;
    _classCallCheck(this, DocumentSearchIO);
    _this2 = _super2.call(this);
    _this2.service = _constants.ServiceString.DOCUMENTS_SEARCH;
    _this2.required_input_fields = [];
    _this2.require_one_of_choices = [];
    _this2.defaults = ["query"];
    _this2.optional_input_fields = ["query", "filters", "document_ids", "top_n_keywords", "top_n_natural_language", "date_from", "date_until"];
    _this2.input_structure = {
      "query": "string",
      "document_ids": "array",
      "top_n_keywords": "number",
      "top_n_natural_language": "number",
      "filters": "object",
      "date_from": "string",
      "date_until": "string"
    };
    // output_fields = ["passages"]
    _this2.output_structure = {
      "passages": [{
        "content": "string",
        "document_id": "string",
        "created_at": "string",
        "name": "string",
        "scores": [{
          "keyword": "number",
          "semantic": "number"
        }],
        "meta": "object"
      }],
      "text": "string"
    };
    return _this2;
  }
  return _createClass(DocumentSearchIO);
}(_service_io["default"]);
exports.DocumentSearchIO = DocumentSearchIO;
var DocumentDeleteIO = /*#__PURE__*/function (_ServiceIO3) {
  _inherits(DocumentDeleteIO, _ServiceIO3);
  var _super3 = _createSuper(DocumentDeleteIO);
  function DocumentDeleteIO() {
    var _this3;
    _classCallCheck(this, DocumentDeleteIO);
    _this3 = _super3.call(this);
    _this3.service = _constants.ServiceString.DOCUMENTS_DELETE;
    _this3.required_input_fields = ["document_ids"];
    _this3.input_structure = {
      "document_ids": ["string", "string"]
    };
    _this3.output_structure = {
      "success": "boolean"
    };
    return _this3;
  }
  return _createClass(DocumentDeleteIO);
}(_service_io["default"]);
exports.DocumentDeleteIO = DocumentDeleteIO;