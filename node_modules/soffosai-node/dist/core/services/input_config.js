"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.InputConfig = void 0;
exports.createInputConfig = createInputConfig;
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
/**
 * @class
 * @alias _InputConfig
 */
var InputConfig = /*#__PURE__*/_createClass(
/**
 * Input Configuration for Pipeline Services.
 * When sequencing Services within a Pipeline this helps configure which Node's output is used as
 * which Node's input.
 * 
 * @param {string} source The name of the SoffosAIService or SoffosPipeline from 
 *                  where the input of the current SoffosAIService should be taken from.
 *                  It can also be "user_input" if the input will come from the user and 
 *                  not from a Service/SoffosPipeline.
 * @param {string} field The name of the output field of the "source".
 * @param {function} pre_process (optional) A function to preprocess the data from source[field].
*/
function InputConfig(source, field) {
  var pre_process = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
  _classCallCheck(this, InputConfig);
  this.source = source;
  this.field = field;
  this.pre_process = pre_process;
  if (pre_process) {
    if (typeof pre_process !== 'function') {
      throw TypeError("pre_process should be callable.");
    }
  }
});
/**
 * Create Configuration for Pipeline Services.
 * When sequencing Services within a Pipeline this helps configure which Node's output is used as
 * which Node's input. 
 * @function
 * @alias _createInputConfig
 * @param {string} source The name of the SoffosAIService or SoffosPipeline from 
 *                  where the input of the current SoffosAIService should be taken from.
 *                  It can also be "user_input" if the input will come from the user and 
 *                  not from a Service/SoffosPipeline.
 * @param {string} field The name of the output field of the "source".
 * @param {function} pre_process (optional) A function to preprocess the data from source[field].
 */
exports.InputConfig = InputConfig;
function createInputConfig(source, field) {
  var pre_process = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
  var _config = {
    source: source,
    field: field
  };
  if (pre_process) {
    if (typeof pre_process !== 'function') {
      throw TypeError("pre_process should be callable.");
    } else {
      _config.pre_process = pre_process;
    }
  }
  return _config;
}