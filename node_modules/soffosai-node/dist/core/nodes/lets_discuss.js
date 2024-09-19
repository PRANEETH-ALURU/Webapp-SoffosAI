"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.LetsDiscussRetrieveNode = exports.LetsDiscussNode = exports.LetsDiscussDeleteNode = exports.LetsDiscussCreateNode = void 0;
var _node = require("./node.js");
var _app = require("../../app.js");
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
/**
 * A service configuration for LetsDiscussCreateService for Pipeline use.
 */
var LetsDiscussCreateNode = /*#__PURE__*/function (_Node) {
  _inherits(LetsDiscussCreateNode, _Node);
  var _super = _createSuper(LetsDiscussCreateNode);
  /**
   * @param {string} name
   * @param {string} context
   */
  function LetsDiscussCreateNode(name, context) {
    var _this;
    _classCallCheck(this, LetsDiscussCreateNode);
    var service = new _app.LetsDiscussCreateService();
    var source = {
      context: context
    };
    return _possibleConstructorReturn(_this, _this = _super.call(this, name, service, source));
  }
  return _createClass(LetsDiscussCreateNode);
}(_node.Node);
/**
 * A service configuration for LetsDiscussService for Pipeline use.
 */
exports.LetsDiscussCreateNode = LetsDiscussCreateNode;
var LetsDiscussNode = /*#__PURE__*/function (_Node2) {
  _inherits(LetsDiscussNode, _Node2);
  var _super2 = _createSuper(LetsDiscussNode);
  /**
   * @param {string} user 
   * @param {string} session_id
   * @param {string} query
   * @returns {Promise<Object>} 
   */
  function LetsDiscussNode(name, session_id, query) {
    var _this2;
    _classCallCheck(this, LetsDiscussNode);
    var service = new _app.LetsDiscussService();
    var source = {
      session_id: session_id,
      query: query
    };
    return _possibleConstructorReturn(_this2, _this2 = _super2.call(this, name, service, source));
  }
  return _createClass(LetsDiscussNode);
}(_node.Node);
/**
 * A service configuration for LetsDiscussRetrieveService for Pipeline use.
 */
exports.LetsDiscussNode = LetsDiscussNode;
var LetsDiscussRetrieveNode = /*#__PURE__*/function (_Node3) {
  _inherits(LetsDiscussRetrieveNode, _Node3);
  var _super3 = _createSuper(LetsDiscussRetrieveNode);
  /**
   * @param {string} name
   * @param {boolean} [return_messages=true]
   */
  function LetsDiscussRetrieveNode(name) {
    var _this3;
    var return_messages = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
    _classCallCheck(this, LetsDiscussRetrieveNode);
    var service = new _app.LetsDiscussRetrieveService();
    var source = {
      return_messages: return_messages
    };
    return _possibleConstructorReturn(_this3, _this3 = _super3.call(this, name, service, source));
  }
  return _createClass(LetsDiscussRetrieveNode);
}(_node.Node);
/**
 * A service configuration for LetsDiscussDeleteService for Pipeline use.
 */
exports.LetsDiscussRetrieveNode = LetsDiscussRetrieveNode;
var LetsDiscussDeleteNode = /*#__PURE__*/function (_Node4) {
  _inherits(LetsDiscussDeleteNode, _Node4);
  var _super4 = _createSuper(LetsDiscussDeleteNode);
  /**
   * @param {string} name
   * @param {Array.<string>} session_ids
   */
  function LetsDiscussDeleteNode(name, session_ids) {
    var _this4;
    _classCallCheck(this, LetsDiscussDeleteNode);
    var service = new _app.LetsDiscussDeleteService();
    var source = {
      session_ids: session_ids
    };
    return _possibleConstructorReturn(_this4, _this4 = _super4.call(this, name, service, source));
  }
  return _createClass(LetsDiscussDeleteNode);
}(_node.Node);
exports.LetsDiscussDeleteNode = LetsDiscussDeleteNode;