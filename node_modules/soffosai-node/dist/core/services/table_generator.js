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
var TABLE_FORMATS = ['markdown', 'CSV'];

/**
 * The table generator module enables applications to extract numerical and statistical 
 * data from raw text in a tabular format. For use-cases where data has to be manually 
 * reviewed and cross-referenced, this module can bring enormous value.
 * @class
 * @alias SoffosServices.TableGeneratorService
 */
var TableGeneratorService = /*#__PURE__*/function (_SoffosAIService) {
  _inherits(TableGeneratorService, _SoffosAIService);
  var _super = _createSuper(TableGeneratorService);
  function TableGeneratorService() {
    var _this;
    var kwargs = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    _classCallCheck(this, TableGeneratorService);
    var service = _constants.ServiceString.TABLE_GENERATOR;
    _this = _super.call(this, service, kwargs);
    _this._serviceio = new _index.TableGeneratorIO();
    return _this;
  }

  /**
   * @param {string} user - The ID of the user accessing the Soffos API.  Soffos assumes that the owner of
   * the api is an application (app) and that app has users. Soffos API will accept any string.
   * @param {string} text - Text to extract tables from.
   * @param {string} [table_format="markdown"] - A string indicating the table output format.
   * Formats supported: "markdown", "csv"
   * @param {string} [engine=null] - The LLM engine to be used.
   * @returns {Promise<Object>} 
   * tables - dictionary list<br>
   * A list of dictionaries representing tables. Each dictionary contains the following fields: <br>
   * title:  A descriptive title for the table. <br>
   * table: The table in a raw markdown or CSV formatted string. <br>
   * note: Useful notes for table interpretation.<br>
   * @example
   * import { SoffosServices } from "soffosai-node";
   * 
   * const my_apiKey = "Token <put your api key here>";
   * const service = new SoffosServices.TableGeneratorService({apiKey:my_apiKey});
   * let response = await service.call(
   *     "client 2345678",
   *     "Demographic and socioeconomic factors can contribute to community spread of COVID-19. \
   *     The aim of this study is to describe the demographics and socioeconomic factors in \
   *     relation to geolocation of COVID-19 patients who were discharged from the emergency \
   *     department (ED) back into the community...",
   *     "CSV"
   * );
   * console.log(JSON.stringify(response, null, 2));
   *     
   * // returns
   * // {
   * //     "tables": [
   * //       {
   * //         "title": "Demographics and Socioeconomic Factors of COVID-19 Patients Discharged from the Emergency Department",
   * //         "table": "Demographic Factor,Socioeconomic Factor,Geolocation\nAge,Income,Latitude\nGender,Education,Longitude\nRace/Ethnicity,Occupation,\nHousing,,\nTransportation,,\n",
   * //         "note": "The table captures the demographic factors (age, gender, race/ethnicity) and socioeconomic factors (income, education, occupation, housing, transportation, health insurance) related to the geolocation (latitude and longitude) of COVID-19 patients discharged from the 
   * //   emergency department."
   * //       }
   * //     ],
   * //     "cost": {
   * //       "api_call_cost": 0.005,
   * //       "character_volume_cost": 0.01535,
   * //       "total_cost": 0.02035
   * //     },
   * //     "charged_character_count": 307,
   * //     "unit_price": "0.000050"
   * // }
   */
  _createClass(TableGeneratorService, [{
    key: "call",
    value: function call(user, text) {
      var table_format = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'markdown';
      var engine = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : null;
      if (!TABLE_FORMATS.includes(table_format)) {
        throw new Error("".concat(table_format, " is not a supported format. Please choose from ").concat(TABLE_FORMATS, "."));
      }
      var payload = {
        "user": user,
        "text": text,
        "table_format": table_format
      };
      if (engine) payload.engine = engine;
      return _get(_getPrototypeOf(TableGeneratorService.prototype), "call", this).call(this, payload);
    }

    /**
     * @param {string} name - Reference name of this Service.
     *  It will be used by the Pipeline to reference this Service.
     * @param {string|InputConfig} text - Text to extract tables from.
     * @param {string|InputConfig} [table_format='markdown'] - A string indicating the table output format.
     * Formats supported: "CSV", 'markdown'
     * @param {string} [engine=null] - The LLM engine to be used.
     */
  }, {
    key: "setInputConfigs",
    value: function setInputConfigs(name, text) {
      var table_format = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'markdown';
      var engine = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : null;
      var source = {
        text: text,
        table_format: table_format
      };
      if (engine) source.engine = engine;
      return _get(_getPrototypeOf(TableGeneratorService.prototype), "setInputConfigs", this).call(this, name, source);
    }
  }]);
  return TableGeneratorService;
}(_service.SoffosAIService);
var _default = TableGeneratorService;
exports["default"] = _default;