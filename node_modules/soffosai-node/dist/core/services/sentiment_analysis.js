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
/**
 * This module processes the text to measure whether it is negative, positive or neutral.
 * The text is processed in segments of user-defined length and it provides scores for each 
 * segment as well as the overall score of the whole text.
 * @class
 * @alias SoffosServices.SentimentAnalysisService
 */
var SentimentAnalysisService = /*#__PURE__*/function (_SoffosAIService) {
  _inherits(SentimentAnalysisService, _SoffosAIService);
  var _super = _createSuper(SentimentAnalysisService);
  function SentimentAnalysisService() {
    var _this;
    var kwargs = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    _classCallCheck(this, SentimentAnalysisService);
    var service = _constants.ServiceString.SENTIMENT_ANALYSIS;
    _this = _super.call(this, service, kwargs);
    _this._serviceio = new _index.SentimentAnalysisIO();
    return _this;
  }

  /**
   * @param {string} user - The ID of the user accessing the Soffos API.  Soffos assumes that the owner of
   * the api is an application (app) and that app has users. Soffos API will accept any string.
   * @param {string} text - Text to be analyzed for sentiment.
   * @param {number} [sentence_split=3] - The number of sentences of each chunk when splitting the input text.
   * @param {boolean} [sentence_overlap=false] - Whether to overlap adjacent chunks by 1 sentence.
   * For example, with sentence_split 3 and sentence_overlap=true :
   * [[s1, s2, s3], [s3, s4, s5], [s5, s6, s7]]
   * @param {string} [engine=null] - The LLM engine to be used.
   * @returns {Promise<Object>} 
   * sentiment_breakdown - dictionary list <br>
   * A list of dictionaries representing the score of each segment of text. Each dictionary contains the following fields: <br>
   * text: The text of the segment. <br>
   * start: The starting character index of the segment in the original text. <br>
   * end: The ending character index of the segment in the original text. <br>
   * sentiment: A dictionary containing the scores for negative, neutral and positive.<br>
   * sentiment_overall - dictionary <br>
   * Contains the overall negative, neutral and positive score for the provided text.<br>
   * @example
   * import { SoffosServices } from "soffosai-node";
   * 
   * const my_apiKey = "Token <put your api key here>";
   * const service = new SoffosServices.SentimentAnalysisService({apiKey:my_apiKey});
   * let response = await service.call(
   *     "client 54321",
   *     "What I love about Soffosai is the availability of its documentation; both in code and on-site.",
   *     1, false
   * );
   * console.log(JSON.stringify(response, null, 2));
   * 
   * // returns
   * // {
   * //     "sentiment_breakdown": [
   * //       {
   * //         "text": "What I love about Soffosai is the availability of its documentation; both in code and on-site.",
   * //         "start": 0,
   * //         "end": 94,
   * //         "sentiment": {
   * //           "negative": 0.0020085338037461042,
   * //           "neutral": 0.017729898914694786,
   * //           "positive": 0.9802615642547607
   * //         }
   * //       }
   * //     ],
   * //     "sentiment_overall": {
   * //       "negative": 0.0020085338037461042,
   * //       "neutral": 0.017729898914694786,
   * //       "positive": 0.9802615642547607
   * //     },
   * //     "cost": {
   * //       "api_call_cost": 0.005,
   * //       "character_volume_cost": 0.005,
   * //       "total_cost": 0.01
   * //     },
   * //     "charged_character_count": 100,
   * //     "unit_price": "0.000050"
   * // }
   */
  _createClass(SentimentAnalysisService, [{
    key: "call",
    value: function call(user, text) {
      var sentence_split = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 4;
      var sentence_overlap = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;
      var engine = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : null;
      var payload = {
        "user": user,
        "text": text,
        "sentence_split": sentence_split,
        "sentence_overlap": sentence_overlap
      };
      if (engine) payload.engine = engine;
      return _get(_getPrototypeOf(SentimentAnalysisService.prototype), "call", this).call(this, payload);
    }

    /**
     * @param {string} name - Reference name of this Service.
     *  It will be used by the Pipeline to reference this Service.
     * @param {string|InputConfig} text - Text to be analyzed for sentiment.
     * @param {number|InputConfig} [sentence_split=4] - The number of sentences of each chunk when splitting the input text.
     * @param {boolean|InputConfig} [sentence_overlap=false] - Whether to overlap adjacent chunks by 1 sentence.
     * For example, with sentence_split 3 and sentence_overlap=true :
     * [[s1, s2, s3], [s3, s4, s5], [s5, s6, s7]]
     * @param {string} [engine=null] - The LLM engine to be used.
     */
  }, {
    key: "setInputConfigs",
    value: function setInputConfigs(name, text) {
      var sentence_split = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 4;
      var sentence_overlap = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;
      var engine = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : null;
      var source = {
        text: text,
        sentence_split: sentence_split,
        sentence_overlap: sentence_overlap
      };
      if (engine) source.engine = engine;
      return _get(_getPrototypeOf(SentimentAnalysisService.prototype), "InputConfig", this).call(this, name, source);
    }
  }]);
  return SentimentAnalysisService;
}(_service.SoffosAIService);
var _default = SentimentAnalysisService;
exports["default"] = _default;