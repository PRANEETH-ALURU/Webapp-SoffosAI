"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DocumentsSearchService = exports.DocumentsIngestService = exports.DocumentsDeleteService = void 0;
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
 * The Documents Ingest module enables ingestion of content into Soffos.
 * Takes in the text and gives the document_id to reference the text in Soffos database.
 * @class
 * @alias SoffosServices.DocumentsIngestService
 */
var DocumentsIngestService = /*#__PURE__*/function (_SoffosAIService) {
  _inherits(DocumentsIngestService, _SoffosAIService);
  var _super = _createSuper(DocumentsIngestService);
  function DocumentsIngestService() {
    var _this;
    var kwargs = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    _classCallCheck(this, DocumentsIngestService);
    var service = _constants.ServiceString.DOCUMENTS_INGEST;
    _this = _super.call(this, service, kwargs);
    _this._serviceio = new _index.DocumentsIngestIO();
    return _this;
  }

  /**
   * @param {string} user - The ID of the user accessing the Soffos API.  Soffos assumes that the owner of
   * the api is an application (app) and that app has users. Soffos API will accept any string.
   * @param {string} document_name - The name of the document.
   * @param {string} [text] - Required when tagged_elements is not provided. 
   * Only one of text and tagged_elements can be provided.
   * The text content of the document.
   * @param {object} [tagged_elements] - Required when text is not provided. Only one of text and tagged_elements can be provided.
   * A list of dictionaries representing tagged spans of 
   * text extracted from a document file. This field accepts the value of the tagged_elements or 
   * normalized_tagged_elements field from the output of the File Converter module.
   * Therefore, it requires each element to contain the text and tag fields and any non-heading 
   * element to contain a headings field which is also a list of dictionaries where each dictionary 
   * should contain the fields text and tag.
   * @param {object} [meta] - A dictionary containing metadata fields for tagging the document. 
   * The keys should be string and the values can be any type, such as string, integer, boolean etc. 
   * This allows document filtering based on the meta fields. Due to name being a mandatory field 
   * provided independently, if a name field is included in meta it will be ignored.
   * @returns {Promise<Object>} 
   * document_id - string <br>
   * The unique id of the ingested document. It's crucial to store the document_id in order 
   * to be able to reference this document later on when calling other modules.
   * @example
   * import { SoffosServices } from "soffosai-node";
   * 
   * const my_apiKey = "Token <put your api key here>";
   * 
   * const service = new SoffosServices.DocumentsIngestService({apiKey:my_apiKey});
   * let response = await service.call(
   *     "client 987654321",
   *     'dogs',
   *     "Genetic evidence suggests that dogs descended directly from wolves (Canis) and \
   *     that the now-extinct wolf lineages that produced dogs branched off from the line \
   *     that produced modern living wolves sometime between 27,000 and 40,000 years ago. \
   *     The timing and location of dog domestication is a matter of debate. \
   *     There is strong genetic evidence, however, that the first domestication events occurred \
   *     somewhere in northern Eurasia between 14,000 and 29,000 years ago.",
   * );
   * console.log(JSON.stringify(response, null, 2));
   * 
   * // returns
   * // {
   * //     "document_id": "0d059b3bf66b4ecfa124c175a6d3cd45",
   * //     "success": true,
   * //     "filtered": {
   * //       "passages": [],
   * //       "reason": "Unable to process due to bad structure."
   * //     },
   * //     "cost": {
   * //       "api_call_cost": 0.005,
   * //       "character_volume_cost": 0.02415,
   * //       "total_cost": 0.02915
   * //     },
   * //     "charged_character_count": 483,
   * //     "unit_price": "0.000050"
   * // }
   */
  _createClass(DocumentsIngestService, [{
    key: "call",
    value: function call(user, document_name) {
      var text = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
      var tagged_elements = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : null;
      var meta = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : null;
      var payload = {
        "user": user,
        "document_name": document_name,
        "name": document_name
      };
      if (text) payload.text = text;
      if (tagged_elements) payload.tagged_elements = tagged_elements;
      if (meta) payload.meta = meta;
      return _get(_getPrototypeOf(DocumentsIngestService.prototype), "call", this).call(this, payload);
    }

    /**
     * @param {string} name - Reference name of this Service.
     *  It will be used by the Pipeline to reference this Service.
     * @param {string|InputConfig} document_name - The name of the document.
     * @param {string|InputConfig} [text] - Required when tagged_elements is not provided. 
     * Only one of text and tagged_elements can be provided.
     * The text content of the document.
     * @param {object|InputConfig} [tagged_elements] - Required when text is not provided. Only one of text and tagged_elements can be provided.
     * A list of dictionaries representing tagged spans of 
     * text extracted from a document file. This field accepts the value of the tagged_elements or 
     * normalized_tagged_elements field from the output of the File Converter module.
     * Therefore, it requires each element to contain the text and tag fields and any non-heading 
     * element to contain a headings field which is also a list of dictionaries where each dictionary 
     * should contain the fields text and tag.
     * @param {object|InputConfig} [meta] - A dictionary containing metadata fields for tagging the document. 
     * The keys should be string and the values can be any type, such as string, integer, boolean etc. 
     * This allows document filtering based on the meta fields. Due to name being a mandatory field 
     * provided independently, if a name field is included in meta it will be ignored.
     */
  }, {
    key: "setInputConfigs",
    value: function setInputConfigs(name, document_name) {
      var text = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
      var tagged_elements = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : null;
      var meta = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : null;
      var source = {
        name: document_name // special handling. document ingest needs "name" as document_name
      };

      if (text) source.text = text;
      if (tagged_elements) source.tagged_elements = tagged_elements;
      if (meta) source.meta = meta;
      return _get(_getPrototypeOf(DocumentsIngestService.prototype), "setInputConfigs", this).call(this, name, source);
    }
  }]);
  return DocumentsIngestService;
}(_service.SoffosAIService);
/**
 * The Documents module enables search of ingested contents from Soffos.
 * @class
 * @alias SoffosServices.DocumentsSearchService
 */
exports.DocumentsIngestService = DocumentsIngestService;
var DocumentsSearchService = /*#__PURE__*/function (_SoffosAIService2) {
  _inherits(DocumentsSearchService, _SoffosAIService2);
  var _super2 = _createSuper(DocumentsSearchService);
  function DocumentsSearchService() {
    var _this2;
    var kwargs = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    _classCallCheck(this, DocumentsSearchService);
    var service = _constants.ServiceString.DOCUMENTS_SEARCH;
    _this2 = _super2.call(this, service, kwargs);
    _this2._serviceio = new _index.DocumentSearchIO();
    return _this2;
  }

  /**
   * @param {string} user - The ID of the user accessing the Soffos API.  Soffos assumes that the owner of
   * the api is an application (app) and that app has users. Soffos API will accept any string.
   * @param {object} [query]
   * Required when top_n_natural_language is set above 0.
   * The text to be used to match passages from ingested documents. 
   * This could be anything from a very specific natural language question to a simple cobination 
   * of words for keyword search. It can also be set as null for only-filtering searches.
   * @param {object} [filters] - The filters field can be used to narrow down the search to only 
   * the documents meeting certain metadata-based criteria, or even returning all the filtered 
   * documents when query is left null. It is catering only for the metadata provided in the meta 
   * field when ingesting a document. Other important filters such as document_ids, date_from and 
   * date_until are provided as top level fields.
   * Filters are defined as nested dictionaries. 
   * The keys of the dictionaries can be a logical operator ("$and", "$or", "$not"), a comparison 
   * operator ("$eq", "$in", "$gt", "$gte", "$lt", "$lte") or a metadata field name. 
   * Logical operator keys have a dictionary of metadata field names and/or logical operators as 
   * their value. Metadata field names have a dictionary of comparison operators as their value. 
   * Comparison operator keys accept a single values or lists as their values. 
   * Lists can be compared with the with the "$in" operator against single values, or with 
   * the "$eq" operator against other lists in which case the set of values of each list 
   * is compared and order does not matter. If no logical operator is given, "$and" is used as 
   * the default operation. If no comparison operator is specified, "$eq" 
   * (or "$in" if the comparison value is a list) is used as the default operation.
   * @param {Array.<string>} [document_ids] - Passing document IDs will confine the search to those documents.
   * @param {number} [top_n_keywords] - The number of document passages to be retrieved using 
   * keyword search. The relevancy is calculated algorithmically based on the frequency of the 
   * query words in the ingested passages. Setting this to 0 disables the keyword search. 
   * When query is left null while top_n_keywords is larger than 0, it will simply filter 
   * the documents based on the rest of the fields like date or metadata. All matched passages will 
   * be returned, therefore the actual value of top_n_keywords does not make a difference, 
   * so long it is larger than 0.
   * @param {number} [top_n_natural_language] - The number of document passages to be retrieved 
   * using Machine Learning-based semantic search. Setting this to 0 disables the semantic search.
   * @param {string} [date_from] - Filters passages to those ingested at or after the specified ISO-8601 formatted date.
   * @param {string} [date_until] - Filters passages to those ingested before the specified ISO-8601 formatted date.
   * @returns {Promise<Object>} 
   * passages - dictionary list <br>
   * List of passages. Each passage contains the following data: <br>
   * content: The raw text of the passage. <br>
   * document_id: Origin document's ID. <br>
   * created_at: Ingestion datetime. <br>
   * name: Origin document's name. <br>
   * scores: Dictionary containing the matching score of this passage to the query for each method that matched it. <br>
   * meta: Dictionary with the metadata that were provided when the passage's origin document was ingested. <br>
   * @example
   * import { SoffosServices } from "soffosai-node";
   * 
   * const my_apiKey = "Token <put your api key here>";
   * const service = new SoffosServices.DocumentsSearchService({apiKey:my_apiKey});
   * let response = await service.call(
   *     "client 987654321", null, null, ["0d059b3bf66b4ecfa124c175a6d3cd45"]
   * );
   * console.log(JSON.stringify(response, null, 2));
   * 
   * // returns this if document_id exists and you own the document
   * // {
   * //     "passages": [
   * //       {
   * //         "content": "Genetic evidence suggests that dogs descended directly from wolves (Canis) and     that the now-extinct wolf lineages that produced dogs branched off from the line     that produced modern living wolves sometime between 27,000 and 40,000 years ago. The timing and location of dog domestication is a matter of debate. There is strong genetic evidence, 
   * //   however, that the first domestication events occurred     somewhere in northern Eurasia between 14,000 and 29,000 years ago.",
   * //         "created_at": "2023-09-13T09:38:00.807895",
   * //         "document_id": "0d059b3bf66b4ecfa124c175a6d3cd45",
   * //         "name": "dogs",
   * //         "scores": [
   * //           {
   * //             "keyword": 0.5312093733737563
   * //           }
   * //         ],
   * //         "meta": {}
   * //       }
   * //     ],
   * //     "cost": {
   * //       "api_call_cost": 0,
   * //       "character_volume_cost": 0,
   * //       "total_cost": 0
   * //     },
   * //     "charged_character_count": 0,
   * //     "unit_price": "0.000000"
   * // }
   */
  _createClass(DocumentsSearchService, [{
    key: "call",
    value: function call(user) {
      var query = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
      var filters = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
      var document_ids = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : null;
      var top_n_keywords = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : 5;
      var top_n_natural_language = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : 5;
      var date_from = arguments.length > 6 && arguments[6] !== undefined ? arguments[6] : null;
      var date_until = arguments.length > 7 && arguments[7] !== undefined ? arguments[7] : null;
      var payload = {
        "user": user,
        "top_n_keywords": top_n_keywords,
        "top_n_natural_language": top_n_natural_language
      };
      if (query) payload.query = query;
      if (filters) payload.filters = filters;
      if (document_ids) payload.document_ids = document_ids;
      if (date_from) payload.date_from = date_from;
      if (date_until) payload.date_until = date_until;
      return _get(_getPrototypeOf(DocumentsSearchService.prototype), "call", this).call(this, payload);
    }

    /**
     * @param {string} name - Reference name of this Service.
     *  It will be used by the Pipeline to reference this Service.
     *  It will be used by the Pipeline to reference this Node.
     * @param {object|InputConfig} [query]
     * Required when top_n_natural_language is set above 0.
     * The text to be used to match passages from ingested documents. 
     * This could be anything from a very specific natural language question to a simple cobination 
     * of words for keyword search. It can also be set as null for only-filtering searches.
     * @param {object|InputConfig} [filters] - The filters field can be used to narrow down the search to only 
     * the documents meeting certain metadata-based criteria, or even returning all the filtered 
     * documents when query is left null. It is catering only for the metadata provided in the meta 
     * field when ingesting a document. Other important filters such as document_ids, date_from and 
     * date_until are provided as top level fields.
     * Filters are defined as nested dictionaries. 
     * The keys of the dictionaries can be a logical operator ("$and", "$or", "$not"), a comparison 
     * operator ("$eq", "$in", "$gt", "$gte", "$lt", "$lte") or a metadata field name. 
     * Logical operator keys have a dictionary of metadata field names and/or logical operators as 
     * their value. Metadata field names have a dictionary of comparison operators as their value. 
     * Comparison operator keys accept a single values or lists as their values. 
     * Lists can be compared with the with the "$in" operator against single values, or with 
     * the "$eq" operator against other lists in which case the set of values of each list 
     * is compared and order does not matter. If no logical operator is given, "$and" is used as 
     * the default operation. If no comparison operator is specified, "$eq" 
     * (or "$in" if the comparison value is a list) is used as the default operation.
     * @param {Array.<string>|InputConfig} [document_ids] - Passing document IDs will confine the search to those documents.
     * @param {number|InputConfig} [top_n_keywords=5] - The number of document passages to be retrieved using 
     * keyword search. The relevancy is calculated algorithmically based on the frequency of the 
     * query words in the ingested passages. Setting this to 0 disables the keyword search. 
     * When query is left null while top_n_keywords is larger than 0, it will simply filter 
     * the documents based on the rest of the fields like date or metadata. All matched passages will 
     * be returned, therefore the actual value of top_n_keywords does not make a difference, 
     * so long it is larger than 0.
     * @param {number|InputConfig} [top_n_natural_language] - The number of document passages to be retrieved 
     * using Machine Learning-based semantic search. Setting this to 0 disables the semantic search.
     * @param {string|InputConfig} [date_from] - Filters passages to those ingested at or after the specified ISO-8601 formatted date.
     * @param {string|InputConfig} [date_until] - Filters passages to those ingested before the specified ISO-8601 formatted date.
     */
  }, {
    key: "setInputConfigs",
    value: function setInputConfigs(name) {
      var query = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
      var filters = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
      var document_ids = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : null;
      var top_n_keywords = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : 5;
      var top_n_natural_language = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : 5;
      var date_from = arguments.length > 6 && arguments[6] !== undefined ? arguments[6] : null;
      var date_until = arguments.length > 7 && arguments[7] !== undefined ? arguments[7] : null;
      var source = {};
      if (query) source.query = query;
      if (filters) source.filters = filters;
      if (document_ids) source.document_ids = document_ids;
      if (top_n_keywords) source.top_n_keywords = top_n_keywords;
      if (top_n_natural_language) source.top_n_natural_language = top_n_natural_language;
      if (date_from) source.date_from = date_from;
      if (date_until) source.date_until = date_until;
      return _get(_getPrototypeOf(DocumentsSearchService.prototype), "setInputConfigs", this).call(this, name, source);
    }
  }]);
  return DocumentsSearchService;
}(_service.SoffosAIService);
/**
 * The Documents module enables deletion of ingested contents from Soffos.
 * @class
 * @alias SoffosServices.DocumentsDeleteService
 */
exports.DocumentsSearchService = DocumentsSearchService;
var DocumentsDeleteService = /*#__PURE__*/function (_SoffosAIService3) {
  _inherits(DocumentsDeleteService, _SoffosAIService3);
  var _super3 = _createSuper(DocumentsDeleteService);
  function DocumentsDeleteService() {
    var _this3;
    var kwargs = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    _classCallCheck(this, DocumentsDeleteService);
    var service = _constants.ServiceString.DOCUMENTS_DELETE;
    _this3 = _super3.call(this, service, kwargs);
    _this3._serviceio = new _index.DocumentDeleteIO();
    return _this3;
  }

  /**
   * @param {string} user - The ID of the user accessing the Soffos API.  Soffos assumes that the owner of
   * the api is an application (app) and that app has users. Soffos API will accept any string.
   * @param {Array.<string>} document_ids - A list of the document_ids of the documents to be deleted.
   * @returns {Promise<Object>} 
   * success = true if operation succeded
   * @example
   * import { SoffosServices } from "soffosai-node";
   * 
   * const my_apiKey = "Token <put your api key here>";
   * const service = new SoffosServices.DocumentsDeleteService({apiKey:my_apiKey});
   * let  response = await service.call('client 987654321', ["0d059b3bf66b4ecfa124c175a6d3cd45"]);
   * console.log(JSON.stringify(response, null, 2));
   * 
   * // returns this if document_id exists and you own the document
   * // {
   * //     "success": true
   * // }
   */
  _createClass(DocumentsDeleteService, [{
    key: "call",
    value: function call(user, document_ids) {
      var payload = {
        "user": user,
        "document_ids": document_ids
      };
      return _get(_getPrototypeOf(DocumentsDeleteService.prototype), "call", this).call(this, payload);
    }

    /**
     * @param {string} name - Reference name of this Service.
     *  It will be used by the Pipeline to reference this Service.
     * @param {string[]|InputConfig} document_ids - A list of the document_ids of the documents to be deleted.
     */
  }, {
    key: "setInputConfigs",
    value: function setInputConfigs(name, document_ids) {
      var source = {
        document_ids: document_ids
      };
      return _get(_getPrototypeOf(DocumentsDeleteService.prototype), "setInputConfigs", this).call(this, name, source);
    }
  }]);
  return DocumentsDeleteService;
}(_service.SoffosAIService);
exports.DocumentsDeleteService = DocumentsDeleteService;