"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _service = require("./service.js");
var _constants = require("../../common/constants.js");
var _index = require("../../common/serviceio_fields/index.js");
var _input_config = require("./input_config.js");
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _get() { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get.bind(); } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(arguments.length < 3 ? target : receiver); } return desc.value; }; } return _get.apply(this, arguments); }
function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }
function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }
var _EMOTION_LIST = ["joy", "trust", "fear", "surprise", "sadness", "disgust", "anger", "anticipation"];

/**
 * Detect selected emotions within the provided text. The original text is chunked to
 * passages of a specified sentence length. Smaller chunks yield better accuracy.
 * @class
 * @alias SoffosServices.EmotionDetectionService
 */
var EmotionDetectionService = /*#__PURE__*/function (_SoffosAIService) {
  _inherits(EmotionDetectionService, _SoffosAIService);
  var _super = _createSuper(EmotionDetectionService);
  function EmotionDetectionService() {
    var _this;
    var kwargs = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    _classCallCheck(this, EmotionDetectionService);
    var service = _constants.ServiceString.EMOTION_DETECTION;
    _this = _super.call(this, service, kwargs);
    _this._serviceio = new _index.EmotionDetectionIO();
    return _this;
  }

  /**
   * @param {string} user - The ID of the user accessing the Soffos API.  Soffos assumes that the owner of
   * the api is an application (app) and that app has users. Soffos API will accept any string.
   * @param {string} text - Text to detect emotions from.
   * @param {number} [sentence_split=4] - The number of sentences of each chunk when splitting the input text.
   * @param {number} [sentence_overlap=false] - Whether to overlap adjacent chunks by 1 sentence.
   * For example, with sentence_split 3 and sentence_overlap=true :
   * [[s1, s2, s3], [s3, s4, s5], [s5, s6, s7]]
   * @param {Array.<string>} [emotion_choices] - List of emotions to detect in the text. If the field is not provided in the payload, or set as null or empty list, it will default to all emotion choices. Currently supported emotions are listed above in the default emotion values.
   * @param {string} [engine=null] - The LLM engine to be used.
   * @returns {Promise<Object>} 
   * spans - dictionary list<br>
   * A list of spans resulting from the specified chunking parameters. Each span contains the following fields: <br>
   * text: The text of the span.<br>
   * detected_emotions: A list of the emotions detected for the specific span.<br>
   * span_start: The starting character index of the span in the original input text.<br>
   * span_end: The ending character index of the span in the original input text.<br>
   * @example
   * import { SoffosServices } from "soffosai-node";
   * 
   * const my_apiKey = "Token <put your api key here>";
   * const service = new SoffosServices.EmotionDetectionService({apiKey:my_apiKey});
   * let response = await service.call("client_a_happy_one", "I am excited about my birthday!");
   * console.log(JSON.stringify(response, null, 2));
   * 
   * // returns
   * // {
   * //     "spans": [
   * //       {
   * //         "detected_emotions": [
   * //           "joy"
   * //         ],
   * //         "text": "I am excited about my birthday!",
   * //         "span_start": 0,
   * //         "span_end": 31
   * //       }
   * //     ],
   * //     "cost": {
   * //       "api_call_cost": 0.005,
   * //       "character_volume_cost": 0.005,
   * //       "total_cost": 0.01
   * //     },
   * //     "charged_character_count": 100,
   * //     "unit_price": "0.000050"
   * // }
   */
  _createClass(EmotionDetectionService, [{
    key: "call",
    value: function call(user, text) {
      var sentence_split = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 4;
      var sentence_overlap = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;
      var emotion_choices = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : _EMOTION_LIST;
      var engine = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : null;
      var _iterator = _createForOfIteratorHelper(emotion_choices),
        _step;
      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var emotion = _step.value;
          if (!_EMOTION_LIST.includes(emotion)) {
            throw new Error("".concat(emotion, " is not valid as an emotion_choices element. Please choose from ").concat(_EMOTION_LIST, "."));
          }
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }
      var payload = {
        "user": user,
        "text": text,
        "sentence_split": sentence_split,
        "sentence_overlap": sentence_overlap,
        "emotion_choices": emotion_choices
      };
      if (engine) payload.engine = engine;
      return _get(_getPrototypeOf(EmotionDetectionService.prototype), "call", this).call(this, payload);
    }

    /**
     * @param {string} name - Reference name of this Service.
     *  It will be used by the Pipeline to reference this Service.
     * @param {string|InputConfig} text - Text to detect emotions from.
     * @param {number|InputConfig} [sentence_split=4] - The number of sentences of each chunk when splitting the input text.
     * @param {boolean|InputConfig} [sentence_overlap=false] - Whether to overlap adjacent chunks by 1 sentence.
     * For example, with sentence_split 3 and sentence_overlap=true :
     * [[s1, s2, s3], [s3, s4, s5], [s5, s6, s7]]
     * @param {Array.<string>|InputConfig} [emotion_choices=_EMOTION_LIST] - List of emotions to detect in the text. If the field is not provided in the payload, or set as null or empty list, it will default to all emotion choices. Currently supported emotions are listed above in the default emotion values.
     * @param {string} [engine=null] - The LLM engine to be used.
     */
  }, {
    key: "setInputConfigs",
    value: function setInputConfigs(name, text) {
      var sentence_split = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 4;
      var sentence_overlap = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;
      var emotion_choices = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : _EMOTION_LIST;
      var engine = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : null;
      var source = {
        text: text,
        sentence_split: sentence_split,
        sentence_overlap: sentence_overlap,
        emotion_choices: emotion_choices
      };
      if (engine) source.engine = engine;
      return _get(_getPrototypeOf(EmotionDetectionService.prototype), "setInputConfigs", this).call(this, name, source);
    }
  }]);
  return EmotionDetectionService;
}(_service.SoffosAIService);
var _default = EmotionDetectionService;
exports["default"] = _default;