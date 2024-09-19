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
 * The Chatbot module enables you to create custom chatbots. You can give it a
 * name, a purpose and connect it to your document repository so that it informs
 * its responses to users from your ingested documents.
 * @class
 * @alias SoffosServices.ChatBotService
 */
var ChatBotService = /*#__PURE__*/function (_SoffosAIService) {
  _inherits(ChatBotService, _SoffosAIService);
  var _super = _createSuper(ChatBotService);
  function ChatBotService() {
    var _this;
    var kwargs = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    _classCallCheck(this, ChatBotService);
    var service = _constants.ServiceString.CHAT_BOT;
    _this = _super.call(this, service, kwargs);
    _this._serviceio = new _index.ChatBotIO();
    return _this;
  }

  /**
   * @param {string} user - The ID of the user accessing the Soffos API.
   * This string will be used for throttling and profanity tracking.
   * Soffos assumes that the owner of the api is an application (app) and that app has users.
   * Soffos API will accept any string."
   * @param {string} message - The user's message to the chatbot
   * @param {string} chatbot_id - The chatbot's id.
   * @param {string} user_id - A unique user id. It is recommended that your provide a UUID.
   * @param {string} mode - The value can only be one of: open, closed, hybrid.
   * @param {string} [session_id=null] - A unique session id for mapping the records to your application.
   * It is recommended that you provide a UUID. If not provided, the
   * system will not store any information regarding the call and
   * will use the value of "previous_messages" as the conversation
   * history.
   * @param {Array} [previous_messages=null] - This field can be used to provide the conversation history. It
   * is ignored if a "session_id" is provided, in which case the
   * system will used the stored interactions from that session as
   * conversation history.
   * @param {Array} [bot_document_ids=null] - Here you can specify documents that describe the bot's
   * background and its perception of itself.
   * @param {Array} [context_document_ids=null] - Pass the ids of the documents that you wish to inform your bot
   * with for the specific user/session. Applicable for closed and
   * hybrid modes as described above.
   * @param {string} [engine=null] - The LLM engine to be used.
   * @returns {Promise<Object>} 
   * response - The agent's response
   * session_name - The session's name which is generated after 3 interactions.
   * messages - A list of the conversation's messages so far.
   * context - The context that was made available to the agent for responding
   * to the user's last message.
   * @example
   * Examples are available at "https://github.com/Soffos-Inc/soffosai-node/tree/master/samples"
   */
  _createClass(ChatBotService, [{
    key: "call",
    value: function call(user, message, chatbot_id, user_id, mode) {
      var session_id = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : null;
      var previous_messages = arguments.length > 6 && arguments[6] !== undefined ? arguments[6] : null;
      var bot_document_ids = arguments.length > 7 && arguments[7] !== undefined ? arguments[7] : null;
      var context_document_ids = arguments.length > 8 && arguments[8] !== undefined ? arguments[8] : null;
      var engine = arguments.length > 9 && arguments[9] !== undefined ? arguments[9] : null;
      var payload = {
        "user": user,
        "message": message,
        "chatbot_id": chatbot_id,
        "user_id": user_id,
        "mode": mode
      };
      if (session_id) payload.session_id = session_id;
      if (previous_messages) payload.previous_messages = previous_messages;
      if (bot_document_ids) payload.bot_document_ids = bot_document_ids;
      if (context_document_ids) payload.context_document_ids = context_document_ids;
      if (engine) payload.engine = engine;
      return _get(_getPrototypeOf(ChatBotService.prototype), "call", this).call(this, payload);
    }

    /**
     * @param {string} name - Reference name of this Service.
     *  It will be used by the Pipeline to reference this Service.
     * @param {(string|InputConfig)} message - The user's message to the chatbot
     * @param {(string|InputConfig)} chatbot_id - The chatbot's id.
     * @param {(string|InputConfig)} user_id - A unique user id. It is recommended that your provide a UUID.
     * @param {(string|InputConfig)} mode - The value can only be one of: open, closed, hybrid.
     * @param {(string|InputConfig)} [session_id=null] - A unique session id for mapping the records to your application.
     * It is recommended that you provide a UUID. If not provided, the
     * system will not store any information regarding the call and
     * will use the value of "previous_messages" as the conversation
     * history.
     * @param {(Array|InputConfig)} [previous_messages=null] - This field can be used to provide the conversation history. It
     * is ignored if a "session_id" is provided, in which case the
     * system will used the stored interactions from that session as
     * conversation history.
     * @param {(Array|InputConfig)} [bot_document_ids=null] - Here you can specify documents that describe the bot's
     * background and its perception of itself.
     * @param {(Array|InputConfig)} [context_document_ids=null] - Pass the ids of the documents that you wish to inform your bot
     * with for the specific user/session. Applicable for closed and
     * hybrid modes as described above.
     * @param {string} [engine=null] - The LLM engine to be used.
     */
  }, {
    key: "setInputConfigs",
    value: function setInputConfigs(name, message, chatbot_id, user_id, mode) {
      var session_id = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : null;
      var previous_messages = arguments.length > 6 && arguments[6] !== undefined ? arguments[6] : null;
      var bot_document_ids = arguments.length > 7 && arguments[7] !== undefined ? arguments[7] : null;
      var context_document_ids = arguments.length > 8 && arguments[8] !== undefined ? arguments[8] : null;
      var engine = arguments.length > 9 && arguments[9] !== undefined ? arguments[9] : null;
      var source = {
        "message": message,
        "chatbot_id": chatbot_id,
        "user_id": user_id,
        "mode": mode
      };
      if (session_id) source.session_id = session_id;
      if (previous_messages) source.previous_messages = previous_messages;
      if (bot_document_ids) source.bot_document_ids = bot_document_ids;
      if (context_document_ids) source.context_document_ids = context_document_ids;
      if (engine) source.engine = engine;
      return _get(_getPrototypeOf(ChatBotService.prototype), "setInputConfigs", this).call(this, name, source);
    }
  }]);
  return ChatBotService;
}(_service.SoffosAIService);
var _default = ChatBotService;
exports["default"] = _default;