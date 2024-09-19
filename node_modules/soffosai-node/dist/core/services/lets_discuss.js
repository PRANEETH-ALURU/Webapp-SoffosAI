"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.LetsDiscussService = exports.LetsDiscussRetrieveService = exports.LetsDiscussDeleteService = exports.LetsDiscussCreateService = void 0;
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
 * The Let's Discuss module allows the user to have a conversation with the AI about the content 
 * provided by the user. The main difference between this module and the Question Answering module 
 * is that Let's Discuss keeps a history of the interactions.
 * 
 * LetsDiscuss service to be used for creating a session.
 * @class
 * @alias SoffosServices.LetsDiscussCreateService
 */
var LetsDiscussCreateService = /*#__PURE__*/function (_SoffosAIService) {
  _inherits(LetsDiscussCreateService, _SoffosAIService);
  var _super = _createSuper(LetsDiscussCreateService);
  function LetsDiscussCreateService() {
    var _this;
    var kwargs = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    _classCallCheck(this, LetsDiscussCreateService);
    var service = _constants.ServiceString.LETS_DISCUSS_CREATE;
    _this = _super.call(this, service, kwargs);
    _this._serviceio = new _index.LetsDiscussCreateIO();
    return _this;
  }

  /**
   * @param {string} user - The ID of the user accessing the Soffos API.  Soffos assumes that the owner of
   * the api is an application (app) and that app has users. Soffos API will accept any string.
   * @param {string} context - The content to discuss about.
   * @param {string} [engine=null] - The LLM engine to be used.
   * @returns {Promise<Object>} 
   * session_id - string
   * The unique id of the conversation session. It's crucial to store the session_id in order to make queries.
   * @example
   * import { SoffosServices } from "soffosai-node";
   * 
   * const my_apiKey = "Token <put your api key here>";
   * const service = new SoffosServices.LetsDiscussCreateService({apiKey:my_apiKey});
   * let response = await service.call(
   *     "me again",
   *     "The James Webb Space Telescope is the largest, most powerful space telescope ever built. \
   *     It will allow scientists to look at what our universe was like about 200 million years \
   *     after the Big Bang. The telescope will be able to capture images of some of the first \
   *     galaxies ever formed. It will also be able to observe objects in our solar system from \
   *     Mars outward, look inside dust clouds to see where new stars and planets are forming \
   *     and examine the atmospheres of planets orbiting other stars."
   * );
   * console.log(JSON.stringify(response, null, 2));
   * 
   * // returns the session id of the conversation
   * // {
   * //     "session_id": "b658686f8b834b3f86d5218a4549e1c4"
   * // }
   */
  _createClass(LetsDiscussCreateService, [{
    key: "call",
    value: function call(user, context) {
      var engine = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
      var payload = {
        "user": user,
        "context": context
      };
      if (engine) payload.engine = engine;
      return _get(_getPrototypeOf(LetsDiscussCreateService.prototype), "call", this).call(this, payload);
    }

    /**
     * @param {string} name - Reference name of this Service.
     *  It will be used by the Pipeline to reference this Service.
     * @param {string|InputConfig} context - The content to discuss about.
     */
  }, {
    key: "setInputConfigs",
    value: function setInputConfigs(name, context) {
      var engine = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
      var source = {
        context: context
      };
      return _get(_getPrototypeOf(LetsDiscussCreateService.prototype), "setInputConfigs", this).call(this, name, source);
    }
  }]);
  return LetsDiscussCreateService;
}(_service.SoffosAIService);
/**
 * The Let's Discuss module allows the user to have a conversation with the AI about the content 
 * provided by the user. The main difference between this module and the Question Answering module 
 * is that Let's Discuss keeps a history of the interactions.
 * 
 * LetsDiscuss main service, continues thread of conversation.
 * @class
 * @alias SoffosServices.LetsDiscussService
 */
exports.LetsDiscussCreateService = LetsDiscussCreateService;
var LetsDiscussService = /*#__PURE__*/function (_SoffosAIService2) {
  _inherits(LetsDiscussService, _SoffosAIService2);
  var _super2 = _createSuper(LetsDiscussService);
  function LetsDiscussService() {
    var _this2;
    var kwargs = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    _classCallCheck(this, LetsDiscussService);
    var service = _constants.ServiceString.LETS_DISCUSS;
    _this2 = _super2.call(this, service, kwargs);
    _this2._serviceio = new _index.LetsDiscussIO();
    return _this2;
  }

  /**
   * @param {string} user - The ID of the user accessing the Soffos API.  Soffos assumes that the owner of
   * the api is an application (app) and that app has users. Soffos API will accept any string.
   * @param {string} session_id - The ID of the session provided by the /create/ endpoint.
   * @param {string} query - User's message.
   * @param {string} [engine=null] - The LLM engine to be used.
   * @returns {Promise<Object>} 
   * response - string <br>
   * Module's response to the user's query. <br>
   * context - string <br>
   * The context discussed about provided by the user during session creation. <br>
   * messages -  dictionary list <br>
   * A list of dictionaries representing all the messages exchanged between the user and the system for the specific session. The messages are sorted in chronological order. <br>
   * Each dictionary contains the following fields: text: The message. source: The source of the message, which is either the user or Soffos.
   * @example
   * import { SoffosServices } from "soffosai-node";
   * 
   * const my_apiKey = "Token <put your api key here>";
   * const service = new SoffosServices.LetsDiscussService({apiKey:my_apiKey});
   * let response = await service.call(
   *     "me again",
   *     "b658686f8b834b3f86d5218a4549e1c4",
   *     "What is the purpose of observing this?"
   * );
   * console.log(JSON.stringify(response, null, 2));
   * 
   * // returns
   * // {
   * //     "response": "The James Webb Space Telescope will allow scientists to look at what our universe was like about 200 million years after the Big Bang. It will also be able to observe objects in our solar system from Mars outward, look inside dust 
   * //   clouds to see where new stars and planets are forming and examine the atmospheres of planets orbiting other stars.",       
   * //     "context": "The James Webb Space Telescope is the largest, most powerful space telescope ever built.     It will allow scientists to look at what our universe was like about 200 million years     after the Big Bang. The telescope will be able to capture images of some of the first     galaxies ever formed. It will also be able to observe objects in our solar system from     Mars outward, look inside dust clouds to see where new stars and planets are forming     and examine the atmospheres of planets orbiting other stars.",
   * //     "messages": [
   * //       {
   * //         "text": "Where can I see the photos taken by this telescope?",
   * //         "source": "user"
   * //       },
   * //       {
   * //         "text": "The photos taken by the James Webb Space Telescope will be available to the public on the official website of the telescope.",
   * //         "source": "soffos"
   * //       },
   * //       {
   * //         "text": "What is the purpose of observing this?",
   * //         "source": "user"
   * //       },
   * //       {
   * //         "text": "The James Webb Space Telescope will allow scientists to look at what our universe was like about 200 million years after the Big Bang. It will also be able to observe objects in our solar system from Mars outward, look inside dust 
   * //   clouds to see where new stars and planets are forming and examine the atmospheres of planets orbiting other stars.",       
   * //         "source": "soffos"
   * //       }
   * //     ],
   * //     "cost": {
   * //       "api_call_cost": 0.005,
   * //       "character_volume_cost": 0.07085,
   * //       "total_cost": 0.07585
   * //     },
   * //     "charged_character_count": 1417,
   * //     "unit_price": "0.000050"
   * // }
   */
  _createClass(LetsDiscussService, [{
    key: "call",
    value: function call(user, session_id, query) {
      var engine = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : null;
      var payload = {
        "user": user,
        "session_id": session_id,
        "query": query
      };
      if (engine) payload.engine = engine;
      return _get(_getPrototypeOf(LetsDiscussService.prototype), "call", this).call(this, payload);
    }

    /**
     * @param {string} name - Reference name of this Service.
     *  It will be used by the Pipeline to reference this Service.
     * @param {string|InputConfig} session_id - The ID of the session provided by the /create/ endpoint.
     * @param {string|InputConfig} query - User's message.
     * @param {string} [engine=null] - The LLM engine to be used.
     * @returns {Promise<Object>} 
     */
  }, {
    key: "setInputConfigs",
    value: function setInputConfigs(name, session_id, query) {
      var engine = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : null;
      var source = {
        session_id: session_id,
        query: query
      };
      if (engine) source.engine = engine;
      return _get(_getPrototypeOf(LetsDiscussService.prototype), "setInputConfigs", this).call(this, name, source);
    }
  }]);
  return LetsDiscussService;
}(_service.SoffosAIService);
/**
 * The Let's Discuss module allows the user to have a conversation with the AI about the content 
 * provided by the user. The main difference between this module and the Question Answering module 
 * is that Let's Discuss keeps a history of the interactions.
 * 
 * LetsDiscuss service to be used for retrieving sessions.
 * @class
 * @alias SoffosServices.LetsDiscussRetrieveService
 */
exports.LetsDiscussService = LetsDiscussService;
var LetsDiscussRetrieveService = /*#__PURE__*/function (_SoffosAIService3) {
  _inherits(LetsDiscussRetrieveService, _SoffosAIService3);
  var _super3 = _createSuper(LetsDiscussRetrieveService);
  function LetsDiscussRetrieveService() {
    var _this3;
    var kwargs = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    _classCallCheck(this, LetsDiscussRetrieveService);
    var service = _constants.ServiceString.LETS_DISCUSS_RETRIEVE;
    _this3 = _super3.call(this, service, kwargs);
    _this3._serviceio = new _index.LetsDiscussRetrieveIO();
    return _this3;
  }

  /**
   * @param {string} user - The ID of the user accessing the Soffos API.  Soffos assumes that the owner of
   * the api is an application (app) and that app has users. Soffos API will accept any string.
   * @param {boolean} return_messages - When set to true, in addition to returning 
   * all the session records, it will also return all the messages associated with each session.
   * @returns {Promise<Object>} 
   * sessions - dictionary list <br>
   * List of sessions. Each session contains the following data: <br>
   * context: The content discussed in the session. <br>
   * session_id: Session's ID. <br>
   * messages: If return_messages is true, this list will contain a list of dictionaries representing the interactions between the system and the user. Each dictionary contains the user's query, the system's response and the interaction's ID as message_id, which is an integer indicating their order.
   * @example
   * import { SoffosServices } from "soffosai-node";
   * 
   * const my_apiKey = "Token <put your api key here>";
   * const service = new SoffosServices.LetsDiscussRetrieveService({apiKey:my_apiKey});
   * let response = await service.call('me again', true);
   * console.log(JSON.stringify(response, null, 2));
   * 
   * // returns
   * // {
   * //     "sessions": [
   * //       {
   * //         "context": "The James Webb Space Telescope is the largest, most powerful space telescope ever built.     It will allow scientists to look at what our universe was like about 200 million years     after the Big Bang. The telescope will be able to capture images of some of the first     galaxies ever formed. It will also be able to observe objects in our solar system from     Mars outward, look inside dust clouds to see where new stars and planets are forming     and examine the atmospheres of planets orbiting other stars.",
   * //         "session_id": "b658686f8b834b3f86d5218a4549e1c4",
   * //         "messages": [
   * //           {
   * //             "query": "Where can I see the photos taken by this telescope?",
   * //             "response": "The photos taken by the James Webb Space Telescope will be available to the public on the official website of the telescope.",
   * //             "message_id": 0
   * //           },
   * //           {
   * //             "query": "What is the purpose of observing this?",
   * //             "response": "The James Webb Space Telescope will allow scientists to look at what our universe was like about 200 million years after the Big Bang. It will also be able to observe objects in our solar system from Mars outward, look inside dust clouds to see where new stars and planets are forming and examine the atmospheres of planets orbiting other stars.",
   * //             "message_id": 1
   * //           }
   * //         ]
   * //       }
   * //     ],
   * //     "session_count": 1
   * // }
   */
  _createClass(LetsDiscussRetrieveService, [{
    key: "call",
    value: function call(user, return_messages) {
      var payload = {
        "user": user,
        "return_messages": return_messages
      };
      return _get(_getPrototypeOf(LetsDiscussRetrieveService.prototype), "call", this).call(this, payload);
    }

    /**
     * @param {string} name - Reference name of this Service.
     *  It will be used by the Pipeline to reference this Service.
     * @param {boolean|InputConfig} [return_messages=true] - When set to true, in addition to returning 
     * all the session records, it will also return all the messages associated with each session.
     */
  }, {
    key: "setInputConfigs",
    value: function setInputConfigs(name) {
      var return_messages = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
      var source = {
        return_messages: return_messages
      };
      return _get(_getPrototypeOf(LetsDiscussRetrieveService.prototype), "setInputConfigs", this).call(this, name, source);
    }
  }]);
  return LetsDiscussRetrieveService;
}(_service.SoffosAIService);
/**
 * The Let's Discuss module allows the user to have a conversation with the AI about the content 
 * provided by the user. The main difference between this module and the Question Answering module 
 * is that Let's Discuss keeps a history of the interactions.
 * 
 * LetsDiscuss service to be used for deleting sessions.
 * @class
 * @alias SoffosServices.LetsDiscussDeleteService
 */
exports.LetsDiscussRetrieveService = LetsDiscussRetrieveService;
var LetsDiscussDeleteService = /*#__PURE__*/function (_SoffosAIService4) {
  _inherits(LetsDiscussDeleteService, _SoffosAIService4);
  var _super4 = _createSuper(LetsDiscussDeleteService);
  function LetsDiscussDeleteService() {
    var _this4;
    var kwargs = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    _classCallCheck(this, LetsDiscussDeleteService);
    var service = _constants.ServiceString.LETS_DISCUSS_DELETE;
    _this4 = _super4.call(this, service, kwargs);
    _this4._serviceio = new _index.LetsDiscussDeleteIO();
    return _this4;
  }

  /**
   * @param {string} user - The ID of the user accessing the Soffos API.  Soffos assumes that the owner of
   * the api is an application (app) and that app has users. Soffos API will accept any string.
   * @param {Array.<string>} session_ids - A list with the IDs of the sessions to be deleted.
   * @returns {Promise<Object>} 
   * success - boolean <br>
   * Indicates whether the sessions have been successfuly deleted.
   * @example
   * import { SoffosServices } from "soffosai-node";
   * 
   * const my_apiKey = "Token <put your api key here>";
   * const service = new SoffosServices.LetsDiscussDeleteService({apiKey:my_apiKey});
   * let response = await service.call('me again', ["b658686f8b834b3f86d5218a4549e1c4"]);
   * console.log(JSON.stringify(response, null, 2));
   * 
   * // returns
   * // {
   * //     "success": true
   * // }
   */
  _createClass(LetsDiscussDeleteService, [{
    key: "call",
    value: function call(user, session_ids) {
      var payload = {
        "user": user,
        "session_ids": session_ids
      };
      return _get(_getPrototypeOf(LetsDiscussDeleteService.prototype), "call", this).call(this, payload);
    }

    /**
     * @param {string} name - Reference name of this Service.
     *  It will be used by the Pipeline to reference this Service.
     * @param {string[]|InputConfig} session_ids - A list with the IDs of the sessions to be deleted.
     */
  }, {
    key: "setInputConfigs",
    value: function setInputConfigs(name, session_ids) {
      var source = {
        session_ids: session_ids
      };
      return _get(_getPrototypeOf(LetsDiscussDeleteService.prototype), "setInputConfigs", this).call(this, name, source);
    }
  }]);
  return LetsDiscussDeleteService;
}(_service.SoffosAIService);
exports.LetsDiscussDeleteService = LetsDiscussDeleteService;