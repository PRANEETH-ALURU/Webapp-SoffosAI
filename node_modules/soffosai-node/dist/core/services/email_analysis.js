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
 * This module extracts key information from the body of an e-mail.
 * @class
 * @alias SoffosServices.EmailAnalysisService
 */
var EmailAnalysisService = /*#__PURE__*/function (_SoffosAIService) {
  _inherits(EmailAnalysisService, _SoffosAIService);
  var _super = _createSuper(EmailAnalysisService);
  function EmailAnalysisService() {
    var _this;
    var kwargs = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    _classCallCheck(this, EmailAnalysisService);
    var service = _constants.ServiceString.EMAIL_ANALYSIS;
    _this = _super.call(this, service, kwargs);
    _this._serviceio = new _index.EmailAnalysisIO();
    return _this;
  }

  /**
   * @param {string} user - The ID of the user accessing the Soffos API.  Soffos assumes that the owner of
   * the api is an application (app) and that app has users. Soffos API will accept any string.
   * @param {string} text - The e-mail body text.
   * @param {string} [engine=null] - The LLM engine to be used.
   * @returns {Promise<Object>} 
   * analysis - dictionary<br>
   * A dictionary containing the following key information: <br>
   * key points string list
      topics string list
      sender string
      receiver string list
      mentions string list
      sentiment string
      urgency string
      dates string list<br>
   * @example
   * import { SoffosServices } from "soffosai-node";
   * 
   * const my_apiKey = "Token <put your api key here>";
   * const service = new SoffosServices.EmailAnalysisService({apiKey:my_apiKey});
   * let response = await service.call(
   *     "client12345",
   *     "Dear John,\n\nI hope this email finds you well. \
   *     I am writing to follow up on a few topics that we discussed in our last meeting on the 31st of March.\
   *     There are a few updates and urgent matters that I would like to discuss with you.\
   *     \n\nFirstly, I wanted to touch base on the progress of the project we discussed. \
   *     As per our conversation, we had agreed on a tentative timeline to complete the project by June 15th.\
   *     However, due to unforeseen circumstances, we are falling behind schedule. \
   *     It is imperative that we discuss the current situation and come up with a plan to get \
   *     back on track as soon as possible.\n\nSecondly, as you are aware, we had discussed the possibility \
   *     of scheduling a meeting with Mary regarding the financials on the 10th of April. \
   *     However, we have yet to confirm a date and time for this meeting. Given the importance of \
   *     this matter, I would like to request that we schedule this meeting within the next two weeks.\
   *     \n\nLastly, I would like to express my appreciation for your ongoing support and assistance \
   *     in these matters. Your expertise and guidance have been invaluable, and I am confident that we \
   *     will be able to overcome any challenges that come our way.\n\nGiven the urgency of these matters, \
   *     I would greatly appreciate a prompt response to this email. \
   *     Kind regards,\
   *     \nPeter"
   * );
   * console.log(JSON.stringify(response, null, 2));
   * 
   * // returns
   * // {
   * //     "analysis": {
   * //       "dates": [
   * //         "31st of March",
   * //         "June 15th",
   * //         "10th of April"
   * //       ],
   * //       "key points": [
   * //         "progress of the project",
   * //         "scheduling a meeting with Mary regarding the financials"
   * //       ],
   * //       "mentions": [
   * //         "John",
   * //         "Mary"
   * //       ],
   * //       "receiver": [
   * //         "John"
   * //       ],
   * //       "sender": [
   * //         "Peter"
   * //       ],
   * //       "sentiment": [],
   * //       "topics": [
   * //         "project progress",
   * //         "meeting scheduling",
   * //         "financials"
   * //       ],
   * //       "urgency": [
   * //         "urgent"
   * //       ]
   * //     },
   * //     "cost": {
   * //       "api_call_cost": 0.005,
   * //       "character_volume_cost": 0.0676,
   * //       "total_cost": 0.0726
   * //     },
   * //     "charged_character_count": 1352,
   * //     "unit_price": "0.000050"
   * // }
   */
  _createClass(EmailAnalysisService, [{
    key: "call",
    value: function call(user, text) {
      var engine = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
      var payload = {
        "user": user,
        "text": text
      };
      if (engine) payload.engine = engine;
      return _get(_getPrototypeOf(EmailAnalysisService.prototype), "call", this).call(this, payload);
    }

    /**
     * @param {string} name - Reference name of this Service.
     *  It will be used by the Pipeline to reference this Service.
     * @param {string|InputConfig} text - The e-mail body text.
     * @param {string} [engine=null] - The LLM engine to be used.
     */
  }, {
    key: "setInputConfigs",
    value: function setInputConfigs(name, text) {
      var engine = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
      var source = {
        text: text
      };
      if (engine) source.engine = engine;
      return _get(_getPrototypeOf(EmailAnalysisService.prototype), "setInputConfigs", this).call(this, name, source);
    }
  }]);
  return EmailAnalysisService;
}(_service.SoffosAIService);
var _default = EmailAnalysisService;
exports["default"] = _default;