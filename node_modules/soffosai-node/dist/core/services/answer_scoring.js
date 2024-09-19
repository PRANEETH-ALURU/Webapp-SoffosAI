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
 * This module will mark the user's answer based on the provided context, the question and, 
 * optionally, the expected correct answer. Typical string similarity methods often fail to accurately 
 * capture the similarity in meaning and semantics, especially in cases where a single word can alter 
 * the entire meaning of a sentence. This module not only addresses this issue, but the fact that the 
 * underlying AI understands the context and question also enables it to evaluate an answer even if 
 * the expected correct answer is not provided. However, when provided, the evaluation will give it 
 * more weight than the information in the context.

 * The score is a value between 0 and 1, with 0 being completely wrong and 1 being perfectly accurate. 
 * Additionally, the reasoning behind the score is provided.

 * The Answer Scoring module is a perfect fit to supplement the Q&A generation module by marking 
 * users' answers to AI-generated question-answer pairs. Together they can power a wide range of 
 * educational and retention-assessment applications.
 * @class
 * @alias SoffosServices.AnswerScoringService
*/
var AnswerScoringService = /*#__PURE__*/function (_SoffosAIService) {
  _inherits(AnswerScoringService, _SoffosAIService);
  var _super = _createSuper(AnswerScoringService);
  function AnswerScoringService() {
    var _this;
    var kwargs = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    _classCallCheck(this, AnswerScoringService);
    var service = _constants.ServiceString.ANSWER_SCORING;
    _this = _super.call(this, service, kwargs);
    _this._serviceio = new _index.AnswerScoringIO();
    return _this;
  }

  /**
   * @param {string} user - The ID of the user accessing the Soffos API.  Soffos assumes that the owner of
   *                        the api is an application (app) and that app has users. Soffos API will accept 
   *                        any string.
   * @param {string} context -  This should be the passage with the information that is related to the 
   *                            question and answer.
   * @param {string} question - The question to answer.
   * @param {string} user_answer - The user's answer which will be marked.
   * @param {string} [answer] - Optionally provide the expected answer.
   * @param {string} [engine=null] - The LLM engine to be used.
   * @returns {Promise<Object>}
   * score - float <br>
   * A value between 0 and 1 indicating the correctness of the answer.<br>
   * reasoning string - A concise explanation of how the AI arrived to the predicted score. <br>
   * @example
   * import { SoffosServices } from "soffosai-node";
   * 
   * const my_apiKey = "Token <put your api key here>";
   * const service = new SoffosServices.AnswerScoringService({apiKey:my_apiKey});
   * let response = await service.call(
   *     "client 12345678",
   *     "Genetic evidence suggests that dogs descended directly from wolves (Canis) and that the now-extinct wolf lineages that produced dogs branched off from the line that produced modern living wolves sometime between 27,000 and 40,000 years ago. The timing and location of dog domestication is a matter of debate. There is strong genetic evidence, however, that the first domestication events occurred somewhere in northern Eurasia between 14,000 and 29,000 years ago.",
   *     "How long ago did dogs first become domesticated?",
   *     "around 20,000 years ago.",
   *     "Between 14,000 and 29,000 years ago."
   * );
   * console.log(JSON.stringify(response, null, 2));
   * 
   * // returns
   * // {
   * //     "score": 0.8,
   * //     "reasoning": "The user's answer is close to the correct answer, but not exact. The correct answer is between 14,000 and 29,000 years ago, while the user's answer is around 20,000 years ago. Although the user's answer falls within the correct range, it is not as precise as the correct answer.",
   * //     "cost": {
   * //       "api_call_cost": 0.005,
   * //       "character_volume_cost": 0.02855,
   * //       "total_cost": 0.03355
   * //     },
   * //     "charged_character_count": 571,
   * //     "unit_price": "0.000050"
   * // }
   */
  _createClass(AnswerScoringService, [{
    key: "call",
    value: function call(user, context, question, user_answer) {
      var answer = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : null;
      var engine = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : null;
      var payload = {
        "user": user,
        "context": context,
        "question": question,
        "user_answer": user_answer
      };
      if (answer) payload.answer = answer;
      if (engine) payload.engine = engine;
      return _get(_getPrototypeOf(AnswerScoringService.prototype), "call", this).call(this, payload);
    }

    /**
     * @param {string} name - Reference name of this Service.
     *  It will be used by the Pipeline to reference this Service.
     * @param {string|InputConfig} context - This should be the passage with the information that is related to the question and answer.
     * @param {string|InputConfig} question - The question to answer.
     * @param {string|InputConfig} user_answer - The user's answer which will be marked.
     * @param {string|InputConfig} [answer=null] - Optionally provide the expected answer.
     * @param {string} [engine=null] - The LLM engine to be used.
     */
  }, {
    key: "setInputConfigs",
    value: function setInputConfigs(name, context, question, user_answer) {
      var answer = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : null;
      var engine = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : null;
      var source = {
        context: context,
        question: question,
        user_answer: user_answer
      };
      if (answer) source.answer = answer;
      if (engine) source.engine = engine;
      return _get(_getPrototypeOf(AnswerScoringService.prototype), "setInputConfigs", this).call(this, name, source);
    }
  }]);
  return AnswerScoringService;
}(_service.SoffosAIService);
var _default = AnswerScoringService;
exports["default"] = _default;