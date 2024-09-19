"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.LetsDiscussRetrieveIO = exports.LetsDiscussIO = exports.LetsDiscussDeleteIO = exports.LetsDiscussCreateIO = void 0;
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
var LetsDiscussCreateIO = /*#__PURE__*/function (_ServiceIO) {
  _inherits(LetsDiscussCreateIO, _ServiceIO);
  var _super = _createSuper(LetsDiscussCreateIO);
  function LetsDiscussCreateIO() {
    var _this;
    _classCallCheck(this, LetsDiscussCreateIO);
    _this = _super.call(this);
    _this.service = _constants.ServiceString.LETS_DISCUSS_CREATE;
    _this.required_input_fields = ["context"];
    _this.input_structure = {
      "context": "string"
    };
    _this.output_structure = {
      "session_id": "string"
    };
    return _this;
  }
  return _createClass(LetsDiscussCreateIO);
}(_service_io["default"]);
exports.LetsDiscussCreateIO = LetsDiscussCreateIO;
var LetsDiscussIO = /*#__PURE__*/function (_ServiceIO2) {
  _inherits(LetsDiscussIO, _ServiceIO2);
  var _super2 = _createSuper(LetsDiscussIO);
  function LetsDiscussIO() {
    var _this2;
    _classCallCheck(this, LetsDiscussIO);
    _this2 = _super2.call(this);
    _this2.service = _constants.ServiceString.LETS_DISCUSS;
    _this2.required_input_fields = ["session_id", "query"];
    _this2.input_structure = {
      "session_id": "string",
      "query": "string"
    };
    _this2.output_structure = {
      "response": "string",
      "context": "string",
      "messages": [{
        "text": "string",
        "source": "string" // "user" or "soffos"
      }]
    };
    return _this2;
  }
  return _createClass(LetsDiscussIO);
}(_service_io["default"]);
exports.LetsDiscussIO = LetsDiscussIO;
var LetsDiscussRetrieveIO = /*#__PURE__*/function (_ServiceIO3) {
  _inherits(LetsDiscussRetrieveIO, _ServiceIO3);
  var _super3 = _createSuper(LetsDiscussRetrieveIO);
  function LetsDiscussRetrieveIO() {
    var _this3;
    _classCallCheck(this, LetsDiscussRetrieveIO);
    _this3 = _super3.call(this);
    _this3.service = _constants.ServiceString.LETS_DISCUSS_RETRIEVE;
    _this3.required_input_fields = ["return_messages"];
    _this3.input_structure = {
      "return_messages": 'boolean'
    };
    _this3.output_structure = {
      "sessions": [{
        "context": "string",
        "session_id": "string",
        "messages": [{
          "query": "string",
          "response": "string",
          "message_id": "number"
        }, {
          "query": "string",
          "response": "string",
          "message_id": "number"
        }]
      }],
      "session_count": "number"
    };
    return _this3;
  }
  return _createClass(LetsDiscussRetrieveIO);
}(_service_io["default"]);
exports.LetsDiscussRetrieveIO = LetsDiscussRetrieveIO;
var LetsDiscussDeleteIO = /*#__PURE__*/function (_ServiceIO4) {
  _inherits(LetsDiscussDeleteIO, _ServiceIO4);
  var _super4 = _createSuper(LetsDiscussDeleteIO);
  function LetsDiscussDeleteIO() {
    var _this4;
    _classCallCheck(this, LetsDiscussDeleteIO);
    _this4 = _super4.call(this);
    _this4.service = _constants.ServiceString.LETS_DISCUSS_DELETE;
    _this4.required_input_fields = ["session_ids"];
    _this4.input_structure = {
      "session_ids": 'array'
    };
    _this4.output_structure = {
      "success": 'boolean'
    };
    return _this4;
  }
  return _createClass(LetsDiscussDeleteIO);
}(_service_io["default"]);
exports.LetsDiscussDeleteIO = LetsDiscussDeleteIO;