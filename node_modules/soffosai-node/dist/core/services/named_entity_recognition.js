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
 * Identifies named entities in text. It supports custom labels.
 * This module is extremely versatile as the labels can be defined by the user.
 * @class
 * @alias SoffosServices.NamedEntityRecognitionService
 */
var NamedEntityRecognitionService = /*#__PURE__*/function (_SoffosAIService) {
  _inherits(NamedEntityRecognitionService, _SoffosAIService);
  var _super = _createSuper(NamedEntityRecognitionService);
  function NamedEntityRecognitionService() {
    var _this;
    var kwargs = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    _classCallCheck(this, NamedEntityRecognitionService);
    var service = _constants.ServiceString.NER;
    _this = _super.call(this, service, kwargs);
    _this._serviceio = new _index.NamedEntityRecognitionIO();
    _this.labels = {};
    return _this;
  }

  /**
   * @param {string} user - The ID of the user accessing the Soffos API.  Soffos assumes that the owner of
   * the api is an application (app) and that app has users. Soffos API will accept any string.
   * @param {string} text - Input text to be analyzed for named entities.
   * @param {Object.<string, string>} [labels] - When providing labels, the module will extract entities that match your labels and descriptions. This gives enough flexibility to deal with any use-case.
   * @param {string} [engine=null] - The LLM engine to be used.
   * @returns {Promise<Object>}
   * named_entities - dictionary list<br>
   * A list of dictionaries representing identified named entities. Each dictionary contains the following fields: <br>
   * text: The text of the entity.<br>
   * tag: Label of the entity.<br>
   * span: A list with the start and end offset of the entity in the original text.<br>
   * entity_counts - dictionary list<br>
   * A list of dictionaries with entities and their counts. The dictionaries contain the following fields: <br>
   * text: The name of the entity.<br>
   * tag: Label of the entity.<br>
   * count: Number of occurrences of the entity in the text.<br>
   * @example
   * import { SoffosServices } from "soffosai-node";
   * 
   * const my_apiKey = "Token <put your api key here>";
   * const service = new SoffosServices.NamedEntityRecognitionService({apiKey:my_apiKey});
   * let response = await service.call(
   *     "client_whatever",
   *     "Patient Name: John Smith\nDate of Admission: June 15, 2023\n \
   *     Medical Record Number: 123456789\n\nChief Complaint:\n \
   *     The patient presents with severe abdominal pain and vomiting.\n\n \
   *     History of Present Illness:\n \
   *     Mr. Smith, a 45-year-old male, reports the onset of abdominal pain two days ago. \
   *     The pain is localized to the lower right quadrant and has been progressively worsening. \
   *     He has experienced multiple episodes of non-bloody vomiting. No significant \
   *     alleviating or exacerbating factors have been identified.\n\nPast Medical History:\n \
   *     The patient has a history of hypertension and type 2 diabetes mellitus. \
   *     He underwent an appendectomy in his childhood. He denies any known allergies or \
   *     previous surgeries.\n\n \
   *     Medications:\n \
   *     - Lisinopril 10mg once daily for hypertension\n \
   *     - Metformin 500mg twice daily for diabetes\n\n \
   *     Family History:\nThe patient's father had a history of myocardial infarction at the age of 60. \
   *     His mother is alive and well with no significant medical conditions. \
   *     There is no known family history of gastrointestinal disorders.\n\n \
   *     Social History:\nMr. Smith is a non-smoker and does not consume alcohol. \
   *     He is married and works as an accountant. He denies any illicit drug use.\n\n \
   *     Physical Examination:\n- Vital Signs: Blood pressure 130/80 mmHg, heart rate 82 bpm, \
   *     respiratory rate 16 breaths per minute, temperature 37.2°C (oral)\n \
   *     - General: The patient appears uncomfortable and is lying still in bed.\n \
   *     - Abdomen: There is tenderness in the right lower quadrant with guarding and \
   *     rebound tenderness. No palpable masses or organomegaly. Bowel sounds are diminished.\n\n \
   *     Assessment and Plan:\nThe patient's presentation is concerning for acute appendicitis. \
   *     He will undergo further diagnostic evaluation, including complete blood count, urinalysis, \
   *     and abdominal ultrasound. In the meantime, he will be kept NPO (nothing by mouth) and \
   *     started on intravenous fluids. Surgical consultation will be obtained for potential appendectomy.\n\n \
   *     Please note that this is a fictional clinical text generated for demonstration purposes only. \
   *     Any resemblance to actual patients or medical scenarios is purely coincidental.",
   *     {
   *         "Admission date": "date of admission"
   *     }
   * );
   * console.log(JSON.stringify(response, null, 2));
   * 
   * // returns
   * // {
   * //     "named_entities": [
   * //       {
   * //         "label": "Admission date",
   * //         "text": "June 15, 2023",
   * //         "span": [
   * //           44,
   * //           57
   * //         ]
   * //       }
   * //     ],
   * //     "entity_counts": [
   * //       {
   * //         "label": "Admission date",
   * //         "text": "June 15, 2023",
   * //         "count": 1
   * //       }
   * //     ],
   * //     "cost": {
   * //       "api_call_cost": 0.005,
   * //       "character_volume_cost": 0.1114,
   * //       "total_cost": 0.1164
   * //     },
   * //     "charged_character_count": 2228,
   * //     "unit_price": "0.000050"
   * // }
   */
  _createClass(NamedEntityRecognitionService, [{
    key: "call",
    value: function call(user, text) {
      var labels = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : undefined;
      var engine = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : null;
      var payload = {
        "user": user,
        "text": text
      };
      if (labels) payload.labels = labels;
      if (labels == undefined && Object.keys(this.labels).length > 0) {
        payload['labels'] = this.labels;
      }
      ;
      if (engine) payload.engine = engine;
      return _get(_getPrototypeOf(NamedEntityRecognitionService.prototype), "call", this).call(this, payload);
    }

    /**
     * Adds a TAG label and its description so that Soffos AI can identify the entities matching the tag
     * @param {string} label - The identifier of the label
     * @param {string} definition - The definition of the label
     */
  }, {
    key: "add_label",
    value: function add_label(label, definition) {
      this.labels[label] = definition;
    }

    /**
     * @param {string} name - Reference name of this Service.
     *  It will be used by the Pipeline to reference this Service.
     * @param {string|InputConfig} text - Input text to be analyzed for named entities.
     * @param {Object.<string, string>|InputConfig} labels - When providing labels, the module will extract entities that match your labels and descriptions. This gives enough flexibility to deal with any use-case.
     * @param {string} [engine=null] - The LLM engine to be used.
     */
  }, {
    key: "setInputConfigs",
    value: function setInputConfigs(name, text) {
      var labels = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : undefined;
      var engine = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : null;
      var source = {
        text: text
      };
      if (labels) source.labels = labels;
      if (engine) source.engine = engine;
      return _get(_getPrototypeOf(NamedEntityRecognitionService.prototype), "setInputConfigs", this).call(this, name, source);
    }
  }]);
  return NamedEntityRecognitionService;
}(_service.SoffosAIService);
var _default = NamedEntityRecognitionService;
exports["default"] = _default;