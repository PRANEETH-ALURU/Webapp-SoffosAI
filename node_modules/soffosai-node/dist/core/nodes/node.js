"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Node = void 0;
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
/**
 * A SoffosAIService wrapper that holds information on how the service is to 
 * be executed inside a SoffosPipeline
 */
var Node = /*#__PURE__*/function () {
  function Node(name) {
    var service = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
    var source = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
    _classCallCheck(this, Node);
    this._raw_service = service, this.name = name;
    this.source = source;
    this.service = service;
  }

  /**
   * This feature is only for testing/debugging a Node.
   * To easily create and call a service, please use the SoffosAIService class
   * @param {object} payload 
   */
  _createClass(Node, [{
    key: "run",
    value: function run() {
      var payload = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
      if (payload !== null) {
        this.source = payload;
      }
      if (!("user" in this.source)) {
        this.source["user"] = this.name;
      }
      return this.service.getResponse(this.source);
    }
  }]);
  return Node;
}();
exports.Node = Node;