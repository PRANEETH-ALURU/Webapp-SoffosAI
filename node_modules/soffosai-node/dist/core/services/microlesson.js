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
 * Identifies illogical statements in text and explains why they are illogical.
 * @class
 * @alias SoffosServices.MicrolessonService
 */
var MicrolessonService = /*#__PURE__*/function (_SoffosAIService) {
  _inherits(MicrolessonService, _SoffosAIService);
  var _super = _createSuper(MicrolessonService);
  function MicrolessonService() {
    var _this;
    var kwargs = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    _classCallCheck(this, MicrolessonService);
    var service = _constants.ServiceString.MICROLESSON;
    _this = _super.call(this, service, kwargs);
    _this._serviceio = new _index.MicrolessonIO();
    return _this;
  }

  /**
   * @param {string} user - The ID of the user accessing the Soffos API.  Soffos assumes that the owner of
   * the api is an application (app) and that app has users. Soffos API will accept any string.
   * @param {Array.<object>} content - A list of dictionaries. Each dictionary should contain the source and text fields, where source is the name of the document/article/website/etc. and text is the actual content. Providing the source names enables the microlesson to include the source for the key points extracted from the content.
   * @param {string} [engine=null] - The LLM engine to be used.
   * @returns {Promise<Object>} 
   * microlesson - string<br>
   * A concise, structured microlesson containing a summary, key points, learning objectives and tasks. <br>
   * @example
   * import { SoffosServices } from "soffosai-node";
   * 
   * const my_apiKey = "Token <put your api key here>";
   * const service = new SoffosServices.MicrolessonService({apiKey:my_apiKey});
   * let response = await service.call(
   *     "client1234567",
   *     [
   *         {
   *             "source": "Telescope.docx",
   *             "text": "The James Webb Space Telescope is the largest, most powerful \
   *             space telescope ever built. It will allow scientists to look at what our \
   *             universe was like about 200 million years after the Big Bang. The telescope \
   *             will be able to capture images of some of the first galaxies ever formed. \
   *             It will also be able to observe objects in our solar system from Mars outward, \
   *             look inside dust clouds to see where new stars and planets are forming and \
   *             examine the atmospheres of planets orbiting other stars."
   *         },
   *         {
   *             "source": "dogs.docx",
   *             "text": "Genetic evidence suggests that dogs descended directly from wolves (Canis) \
   *             and that the now-extinct wolf lineages that produced dogs branched off from the \
   *             line that produced modern living wolves sometime between 27,000 and 40,000 years ago. \
   *             The timing and location of dog domestication is a matter of debate. \
   *             There is strong genetic evidence, however, that the first domestication events \
   *             occurred somewhere in northern Eurasia between 14,000 and 29,000 years ago.",
   *         }
   *     ]
   * );
   * console.log(JSON.stringify(response, null, 2));
   * 
   * // returns
   * // {
   * //     "microlesson": {
   * //       "summary": "The James Webb Space Telescope is the largest, most powerful space telescope ever built and will allow scientists to observe objects in our solar system from Mars outward. Genetic evidence suggests that dogs descended directly from wolves and that the first domestication events occurred somewhere in northern Eurasia between 14,000 and 29,000 years ago.",
   * //       "key_points": [
   * //         {
   * //           "key_point": "The James Webb Space Telescope is the largest, most powerful space telescope ever built.",
   * //           "source": "Telescope.docx"
   * //         },
   * //         {
   * //           "key_point": "Dogs descended directly from wolves  and the first domestication events occurred somewhere in northern Eurasia between 14,000 and 29,000 years ago (dogs.docx)..",
   * //           "source": "Canis"
   * //         }
   * //       ],
   * //       "learning_objectives": [
   * //         "Understand the capabilities of the James Webb Space Telescope.",
   * //         "Understand the history of dog domestication."
   * //       ],
   * //       "tasks": [
   * //         "Research the James Webb Space Telescope and list its capabilities.",
   * //         "Research the history of dog domestication and list the key points."
   * //       ]
   * //     },
   * //     "cost": {
   * //       "api_call_cost": 0.005,
   * //       "character_volume_cost": 0.049,
   * //       "total_cost": 0.054
   * //     },
   * //     "charged_character_count": 980,
   * //     "unit_price": "0.000050"
   * // }
   */
  _createClass(MicrolessonService, [{
    key: "call",
    value: function call(user) {
      var content = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : undefined;
      var engine = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
      if (content != undefined) {
        this.content = content;
      }
      var payload = {
        "user": user,
        "content": content
      };
      payload['content'] = this.content;
      if (engine) payload.engine = engine;
      return _get(_getPrototypeOf(MicrolessonService.prototype), "call", this).call(this, payload);
    }

    /**
     * @param {string} source 
     * @param {string} text 
     */
  }, {
    key: "add_content",
    value: function add_content(source, text) {
      this.content.push({
        "source": source,
        "text": text
      });
    }

    /**
     * @param {string} name - Reference name of this Service.
     *  It will be used by the Pipeline to reference this Service.
     * @param {object[]|InputConfig} content - A list of dictionaries. Each dictionary should 
     * contain the source and text fields, where source is the name of the
     * document/article/website/etc. and text is the actual content. Providing the source names 
     * enables the microlesson to include the source for the key points extracted from the content.
     * @param {string} [engine=null] - The LLM engine to be used.
     */
  }, {
    key: "setInputConfigs",
    value: function setInputConfigs(name, content) {
      var engine = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
      var source = {
        content: content
      };
      if (engine) source.engine = engine;
      return _get(_getPrototypeOf(MicrolessonService.prototype), "setInputConfigs", this).call(this, name, source);
    }
  }]);
  return MicrolessonService;
}(_service.SoffosAIService);
var _default = MicrolessonService;
exports["default"] = _default;