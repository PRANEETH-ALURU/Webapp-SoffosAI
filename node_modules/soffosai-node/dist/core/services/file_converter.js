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
 * The File Converter extracts text from various types of files.
 * @class
 * @alias SoffosServices.FileConverterService
 */
var FileConverterService = /*#__PURE__*/function (_SoffosAIService) {
  _inherits(FileConverterService, _SoffosAIService);
  var _super = _createSuper(FileConverterService);
  function FileConverterService() {
    var _this;
    var kwargs = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    _classCallCheck(this, FileConverterService);
    var service = _constants.ServiceString.FILE_CONVERTER;
    _this = _super.call(this, service, kwargs);
    _this._serviceio = new _index.FileConverterIO();
    return _this;
  }

  /**
   * @param {string} user - The ID of the user accessing the Soffos API.  Soffos assumes that the owner of
   * the api is an application (app) and that app has users. Soffos API will accept any string.
   * @param {string|object} file - The byte stream of the file. The file should not exceed 50Mb in size.
   * @param {number} [normalize=0] - Whether to perform normalization.
   * @returns {Promise<Object>}
   * text - string<br>
   * Raw text extracted from the document. <br>
   *  <br>
   * tagged_elements dictionary list     * A list of dictionaries of all the extracted text snippets and their tags. Each dictionary has the following fields: <br>
   * text: The text of the snippet.<br>
   * tag: A tag. Detectable elements: paragraph, heading, bullet_list, table_of_contents.<br>
   * headings: A list of dictionaries representing the headings which this element is under. Each dictionary contains the text and tag fields of each heading. This is useful for sorting and labelling the content.<br>
   * Other element-specific fields: <br>
   * bullets: Available only bullet_list elements. Contains all bullets and their sub-bullets in a nested structure.<br>
   * contents: Available only in table_of_content elements. Contains the headings and sub-headings of the document's table of contents.<br>
   * heading: Available only in table_of_content elements. It is the heading of the document's table of contents.<br>
   * normalized_text - string<br>
   * Resulting text after normalization. <br>
   * normalized_tagged_elements - dictionary list<br>
   * Similar to the standard tagged_elements. Detectable elements: paragraph, heading, bullet_list, quote.<br>
   * @example
   * // needs React.js or other frontend js library or framework
   * // assuming you have a file field with id="my_file" and a button with id="sendFileBtn"
   * import { SoffosServices } from 'soffosai'; // will not work if used directly to html. Please use the soffosai.bundle.js if you need to use soffosai directly to html.
   * const my_apiKey = 'Token <put your api key here>';
   * 
   * async function sendFile() {
   *     const theFile = document.getElementById("myFile").files[0];
   *     let service = new SoffosServices.FileConverterService({apiKey: my_apiKey});
   *     let response = await service.call("client_id", theFile);
   *     console.log(SON.stringify(response, null, 2));
   * }
   * 
   * document.querySelector('#sendFileBtn').addEventListener('click', sendFile);
   * 
   */
  _createClass(FileConverterService, [{
    key: "call",
    value: function call(user, file) {
      var normalize = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : "0";
      if (!["0", "1"].includes(normalize)) {
        throw new Error("".concat(this._service, ": normalize can only accept a value of '0' or '1';"));
      }
      var payload = {
        user: user,
        file: file,
        normalize: normalize
      };
      return _get(_getPrototypeOf(FileConverterService.prototype), "call", this).call(this, payload);
    }

    /**
     * @param {string} name - Reference name of this Service.
     *  It will be used by the Pipeline to reference this Service.
     * @param {object|string|InputConfig} file - The byte stream of the file. The file should not exceed 50Mb in size.
     * @param {string|InputConfig} [normalize] - Whether to perform normalization.
     */
  }, {
    key: "setInputConfigs",
    value: function setInputConfigs(name, file) {
      var normalize = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '0';
      var source = {
        file: file,
        normalize: normalize
      };
      return _get(_getPrototypeOf(FileConverterService.prototype), "setInputConfigs", this).call(this, name, source);
    }
  }]);
  return FileConverterService;
}(_service.SoffosAIService);
var _default = FileConverterService;
exports["default"] = _default;