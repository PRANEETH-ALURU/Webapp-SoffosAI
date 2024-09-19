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
 * This module is a combination of various sub-modules that enable users to get accurate answers on 
 * questions posed on a large amount of content. It includes basic intent recognition capabilities 
 * to enable appropriate responses to incorrect or profane language, or typical personal questions 
 * like "How are you?" and greetings
 * @class
 * @alias SoffosServices.QuestionAnsweringService
 */
var QuestionAnsweringService = /*#__PURE__*/function (_SoffosAIService) {
  _inherits(QuestionAnsweringService, _SoffosAIService);
  var _super = _createSuper(QuestionAnsweringService);
  function QuestionAnsweringService() {
    var _this;
    var kwargs = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    _classCallCheck(this, QuestionAnsweringService);
    var service = _constants.ServiceString.QUESTION_ANSWERING;
    _this = _super.call(this, service, kwargs);
    _this._serviceio = new _index.QuestionAnsweringIO();
    return _this;
  }

  /**
   * @param {string} user - The ID of the user accessing the Soffos API.  Soffos assumes that the owner of
   * the api is an application (app) and that app has users. Soffos API will accept any string.
   * @param {string} question - The question
   * @param {string} [document_text] - The text to be used as the context to formulate the answer.
   * @param {Array.<string>} [document_ids] - A list of unique IDs referencing pre-ingested documents to be used as the context to formulate the answer.
   * @param {bool} [check_ambiguity=true] - When true, it checks whether the message contains a pronoun which is impossible to resolve and responds appropriately to avoid low quality or inaccurate answers. This is most useful when this module is used for conversational agents. For example:
   * "What was his most famous invention?"
   * Queries with pronouns that also contain the entity that the pronoun refers to are not rejected. For example:
   * "What was Tesla's most famous invention and when did he create it?"
   * In this case, the AI can infer that he refers to Tesla.
   * Set this to false only when getting the most relevant content as the answer has equal or higher importance than the question being rejected or the answer being ambiguous/inaccurate.
   * @param {string} [check_query_type=true] - When true, it will check whether the message is a natural language question, or whether it is a keyword query or a statement and respond appropriately if the message is not a question. The module is capable of returning a relevant answer to keyword or poorly formulated queries, but this option can help restrict the input.
   * Set to false only when you wish the module to attempt to answer the query regardless of its type or syntactical quality.
   * @param {string} [generic_responses=false] - In addition to checking for ambiguity or query type, this module performs other checks such as profanity, language, etc.. If the input query fails in one of these checks, it will reject the query by responding with a message that points out the issue.
   * When true, the module will respond with a generic message without giving the reason as to why the message was rejected, which is the same behavior as when it cannot find an answer to the query in the provided context.
   * @param {Object.<string, string>} meta
   * @param {string} [engine=null] - The LLM engine to be used.
   * @returns {Promise<Object>} 
   * answer - string<br>
   * The answer to the query. In cases where the query failed a check, and depending on the above explained parameters, this will be a message that indicates that an answer could not be retrieved. <br>
   * valid_query - boolean <br>
   * Boolean flag denoting whether the query failed a check. <br>
   * no_answer - boolean <br>
   * Boolean flag denoting that the query has passed the checks, but no answer for it was found in the context. <br>
   * message_id - string <br>
   * A unique ID representing the message and its associated prediction. <br>
   * passages - dictionary list <br> 
   * A list of objects representing the most relevant passages of the queried documents. The first step for generating an answer is finding the most relevant passages from a big knowledge base. The passages are matched with a combination of keyword and semantic similarity. Each passage has the following fields: <br>
   * text, document_name, document_id, scores: A dictionary containing the matching scores for either or both keyword, semantic. <br>
   * context - string <br>
   * The merged passages text.<br>
   * highlights - dictionary list<br>
   * A list of objects representing sentences within the context which are highly similar to the answer. Each dictionary has the following fields:<br>
   * span: A list with the start and end character index of the sentence within context.
   * sentence: The sentence text.<br>
   * @example
   * import { SoffosServices } from "soffosai-node";
   * 
   * const my_apiKey = "Token <put your api key here>";
   * const service = new SoffosServices.QuestionAnsweringService({apiKey:my_apiKey});
   * let response = await service.call(
   *     "client12345",
   *     "How would Soffos SDK help me as a programmer?",
   *     "The Soffos SDK simplifies the process of plugging Soffos APIs into your applications. \
   *     With reduced code requirements, you can seamlessly integrate powerful AI functionalities \
   *     like microlessons, named entity recognition, and more."
   * );
   * console.log(JSON.stringify(response, null, 2));
   *     
   * // returns
   * // {
   * //     "message_id": "43f354b0ef1040a7894cfd2260652d9e",
   * //     "answer": "The Soffos SDK would help you as a programmer by simplifying the process of plugging Soffos APIs into your applications and reducing code requirements. This would allow you to seamlessly integrate powerful AI functionalities like microlessons and named entity recognition.",
   * //     "context": "The Soffos SDK simplifies the process of plugging Soffos APIs into your applications.     With reduced code requirements, you can seamlessly integrate powerful AI functionalities     like microlessons, named entity recognition, and more.",
   * //     "valid_query": true,
   * //     "no_answer": false,
   * //     "highlights": [
   * //       {
   * //         "span": [
   * //           90,
   * //           237
   * //         ],
   * //         "sentence": "With reduced code requirements, you can seamlessly integrate powerful AI functionalities     like microlessons, named entity recognition, and more."
   * //       }
   * //     ],
   * //     "passages": [],
   * //     "cost": {
   * //       "api_call_cost": 0.005,
   * //       "character_volume_cost": 0.0141,
   * //       "total_cost": 0.0191
   * //     },
   * //     "charged_character_count": 282,
   * //     "unit_price": "0.000050"
   * // }
   *   
   */
  _createClass(QuestionAnsweringService, [{
    key: "call",
    value: function call(user, question) {
      var document_text = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : undefined;
      var document_ids = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : undefined;
      var check_ambiguity = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : true;
      var check_query_type = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : true;
      var generic_responses = arguments.length > 6 && arguments[6] !== undefined ? arguments[6] : false;
      var meta = arguments.length > 7 && arguments[7] !== undefined ? arguments[7] : undefined;
      var engine = arguments.length > 8 && arguments[8] !== undefined ? arguments[8] : null;
      var payload = {
        "user": user,
        "question": question,
        "check_ambiguity": check_ambiguity,
        "check_query_type": check_query_type,
        "generic_responses": generic_responses
      };
      if (document_text) payload.document_text = document_text;
      if (document_ids) payload.document_ids = document_ids;
      if (meta) payload.meta = meta;
      if (engine) payload.engine = engine;
      payload['message'] = question;
      return _get(_getPrototypeOf(QuestionAnsweringService.prototype), "call", this).call(this, payload);
    }

    /**
     * @param {string} name - Reference name of this Service.
     *  It will be used by the Pipeline to reference this Service.
     * @param {string|InputConfig} question - The question
     * @param {string|InputConfig} document_text - The text to be used as the context to formulate the answer.
     * @param {string[]|InputConfig} document_ids - A list of unique IDs referencing pre-ingested documents to be used as the context to formulate the answer.
     * @param {boolean|InputConfig} check_ambiguity - When true, it checks whether the message contains a pronoun which is impossible to resolve and responds appropriately to avoid low quality or inaccurate answers. This is most useful when this module is used for conversational agents. For example:
     * "What was his most famous invention?"
     * Queries with pronouns that also contain the entity that the pronoun refers to are not rejected. For example:
     * "What was Tesla's most famous invention and when did he create it?"
     * In this case, the AI can infer that he refers to Tesla.
     * Set this to false only when getting the most relevant content as the answer has equal or higher importance than the question being rejected or the answer being ambiguous/inaccurate.
     * @param {boolean|InputConfig} check_query_type - When true, it will check whether the message is a natural language question, or whether it is a keyword query or a statement and respond appropriately if the message is not a question. The module is capable of returning a relevant answer to keyword or poorly formulated queries, but this option can help restrict the input.
     * Set to false only when you wish the module to attempt to answer the query regardless of its type or syntactical quality.
     * @param {boolean|InputConfig} generic_responses
     * @param {object|InputConfig} meta
     * @param {string} [engine=null] - The LLM engine to be used.
     */
  }, {
    key: "setInputConfigs",
    value: function setInputConfigs(name, question) {
      var document_text = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : undefined;
      var document_ids = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : undefined;
      var check_ambiguity = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : true;
      var check_query_type = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : true;
      var generic_responses = arguments.length > 6 && arguments[6] !== undefined ? arguments[6] : false;
      var meta = arguments.length > 7 && arguments[7] !== undefined ? arguments[7] : undefined;
      var engine = arguments.length > 8 && arguments[8] !== undefined ? arguments[8] : null;
      var source = {
        message: question,
        // special handling, message is unclear so question is used
        check_ambiguity: check_ambiguity,
        check_query_type: check_query_type,
        generic_responses: generic_responses,
        quesion: question
      };
      if (document_text) source.document_text = document_text;
      if (document_ids) source.document_ids = document_ids;
      if (meta) source.meta = meta;
      if (engine) source.engine = engine;
      return _get(_getPrototypeOf(QuestionAnsweringService.prototype), "setInputConfigs", this).call(this, name, source);
    }
  }]);
  return QuestionAnsweringService;
}(_service.SoffosAIService);
var _default = QuestionAnsweringService;
exports["default"] = _default;