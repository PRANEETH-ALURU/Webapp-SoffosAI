"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SoffosAIService = void 0;
exports.isValidUuid = isValidUuid;
var _axios = _interopRequireDefault(require("axios"));
var _formData = _interopRequireDefault(require("form-data"));
var _fs = require("fs");
var _index = require("../../common/index.js");
var _type_classifications = require("./../../utils/type_classifications.js");
var _config = require("../../common/config.js");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, defineProperty = Object.defineProperty || function (obj, key, desc) { obj[key] = desc.value; }, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return defineProperty(generator, "_invoke", { value: makeInvokeMethod(innerFn, self, context) }), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; defineProperty(this, "_invoke", { value: function value(method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; } function maybeInvokeDelegate(delegate, context) { var methodName = context.method, method = delegate.iterator[methodName]; if (undefined === method) return context.delegate = null, "throw" === methodName && delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method) || "return" !== methodName && (context.method = "throw", context.arg = new TypeError("The iterator does not provide a '" + methodName + "' method")), ContinueSentinel; var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, defineProperty(Gp, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), defineProperty(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (val) { var object = Object(val), keys = []; for (var key in object) keys.push(key); return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i["return"] && (_r = _i["return"](), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e2) { throw _e2; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e3) { didErr = true; err = _e3; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
var visit_docs_message = "Kindly visit https://platform.soffos.ai/playground/docs#/ for guidance.";
var input_structure_message = "To learn what the input dictionary should look like, access it by <your_service_instance>.input_structure";

/**
 * given a uuid string without dashes, convert it to standard form
 * @param {string} uuid 
 * @returns {string}
 */
function formatUuid(uuid) {
  var formattedUuid = [uuid.slice(0, 8), uuid.slice(8, 12), uuid.slice(12, 16), uuid.slice(16, 20), uuid.slice(20)].join("-");
  return formattedUuid;
}

/**
 * Checks if a string is a valid UUID string
 * @param {string} uuidString 
 * @returns {boolean}
 */
function isValidUuid(uuidString) {
  if (typeof uuidString === "function") {
    return true;
  }
  var formattedUuid;
  if (!uuidString.includes("-")) {
    formattedUuid = formatUuid(uuidString);
  } else {
    formattedUuid = uuidString;
  }
  var regex = /^[a-f0-9]{8}-[a-f0-9]{4}-[1-5][a-f0-9]{3}-[89ab][a-f0-9]{3}-[a-f0-9]{12}$/i;
  return regex.test(formattedUuid);
}

/**
 * Base service class for all Soffos Services
 */
var SoffosAIService = /*#__PURE__*/function () {
  /**
   * @param {string} service - The name of the Soffos Service
   * @param {Object} kwargs  - holds additional properties for the Service like apiKey.
   */
  function SoffosAIService(service) {
    var kwargs = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    _classCallCheck(this, SoffosAIService);
    var apiKey;
    if (kwargs.apiKey) {
      apiKey = kwargs.apiKey;
    } else {
      apiKey = _config.SoffosConfig.apiKey;
    }
    if (!apiKey) {
      throw TypeError("API key not provided.");
    }
    this.headers = {
      "x-api-key": apiKey
    };
    this._apikey = apiKey;
    this._service = service;
    // In a pipeline, some payload properties are constants and should be related to the Service's instance
    this._payload = {};
  }

  /**
   * These are the valid fields of the src dictionary for this service. Take note that some of the fields should not exist at the same time.
   * To view fields that cannot co-exist, access the 'choose_one' property.
   */
  _createClass(SoffosAIService, [{
    key: "get_input_structure",
    value: function get_input_structure() {
      return this._serviceio.input_structure;
    }

    /**
     * Prefetch validation algorithm before the API is actually accessed. Saves time and credits.
     * @param {object} payload         - The data that will be sent to the Soffos API for interpretation and response
     * @returns {Array<boolean,Array>} - The first element of the return value is the status of the validation: true if valid else false. 
     *                                   The second element is the list of errors. null if there are no errors
     */
  }, {
    key: "validatePayload",
    value: function () {
      var _validatePayload = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(payload) {
        var userFromSrc, missingRequirements, groupErrors, special_validation, special_validation_passed, special_validation_error_message, _iterator, _step, group, foundChoices, inputStructure, valueErrors, _i, _Object$entries, _Object$entries$_i, key, value, serviceioType, inputType, documentIds, _iterator2, _step2, _id, validUuid;
        return _regeneratorRuntime().wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              if ((0, _type_classifications.isDictObject)(payload)) {
                _context.next = 2;
                break;
              }
              throw new TypeError("payload should be an object");
            case 2:
              // Check for missing arguments
              userFromSrc = payload.user;
              if (userFromSrc) {
                _context.next = 5;
                break;
              }
              return _context.abrupt("return", [false, "".concat(this._service, ": user key is required in the payload")]);
            case 5:
              if (!(this._serviceio.required_input_fields.length > 0)) {
                _context.next = 9;
                break;
              }
              missingRequirements = this._serviceio.required_input_fields.filter(function (required) {
                return !(required in payload);
              });
              if (!(missingRequirements.length > 0)) {
                _context.next = 9;
                break;
              }
              return _context.abrupt("return", [false, "".concat(this._service, ": Please provide ").concat(missingRequirements, " on your payload. ").concat(visit_docs_message, ". ").concat(input_structure_message)]);
            case 9:
              groupErrors = [];
              special_validation = this._serviceio.special_validation(payload);
              special_validation_passed = special_validation[0];
              special_validation_error_message = special_validation[1];
              if (!special_validation_passed) {
                groupErrors.push(special_validation_error_message);
              }
              if (!(this._serviceio.require_one_of_choices.length > 0)) {
                _context.next = 19;
                break;
              }
              _iterator = _createForOfIteratorHelper(this._serviceio.require_one_of_choices);
              try {
                for (_iterator.s(); !(_step = _iterator.n()).done;) {
                  group = _step.value;
                  foundChoices = group.filter(function (choice) {
                    return choice in payload;
                  });
                  if (foundChoices.length === 0) {
                    groupErrors.push("".concat(this._service, ": Please provide one of these values on your payload: ").concat(group));
                  } else if (foundChoices.length > 1) {
                    groupErrors.push("".concat(this._service, ": Please only include one of these values: ").concat(group));
                  }
                }
              } catch (err) {
                _iterator.e(err);
              } finally {
                _iterator.f();
              }
              if (!(groupErrors.length > 0)) {
                _context.next = 19;
                break;
              }
              return _context.abrupt("return", [false, groupErrors]);
            case 19:
              // Check if payload has proper types
              inputStructure = this._serviceio.input_structure;
              valueErrors = [];
              for (_i = 0, _Object$entries = Object.entries(payload); _i < _Object$entries.length; _i++) {
                _Object$entries$_i = _slicedToArray(_Object$entries[_i], 2), key = _Object$entries$_i[0], value = _Object$entries$_i[1];
                if (key in inputStructure) {
                  serviceioType = (0, _type_classifications.get_serviceio_datatype)(inputStructure[key]);
                  inputType = (0, _type_classifications.get_userinput_datatype)(value);
                  if (inputType !== serviceioType) {
                    valueErrors.push("".concat(key, " requires ").concat(serviceioType, " but ").concat(inputType, " is provided."));
                  }
                }
              }
              if (!(valueErrors.length > 0)) {
                _context.next = 24;
                break;
              }
              return _context.abrupt("return", [false, valueErrors]);
            case 24:
              if (!("document_ids" in payload)) {
                _context.next = 45;
                break;
              }
              documentIds = payload.document_ids;
              if (!Array.isArray(documentIds)) {
                _context.next = 45;
                break;
              }
              _iterator2 = _createForOfIteratorHelper(documentIds);
              _context.prev = 28;
              _iterator2.s();
            case 30:
              if ((_step2 = _iterator2.n()).done) {
                _context.next = 37;
                break;
              }
              _id = _step2.value;
              validUuid = isValidUuid(_id);
              if (validUuid) {
                _context.next = 35;
                break;
              }
              return _context.abrupt("return", [false, "".concat(_id, " is an invalid document_id")]);
            case 35:
              _context.next = 30;
              break;
            case 37:
              _context.next = 42;
              break;
            case 39:
              _context.prev = 39;
              _context.t0 = _context["catch"](28);
              _iterator2.e(_context.t0);
            case 42:
              _context.prev = 42;
              _iterator2.f();
              return _context.finish(42);
            case 45:
              return _context.abrupt("return", [true, null]);
            case 46:
            case "end":
              return _context.stop();
          }
        }, _callee, this, [[28, 39, 42, 45]]);
      }));
      function validatePayload(_x) {
        return _validatePayload.apply(this, arguments);
      }
      return validatePayload;
    }()
    /**
     * Prepare the JSON or form data input of the service
     * Will be used when there is a special handling needed for an element of the payload
     */
  }, {
    key: "getData",
    value: function getData(payload) {
      var requestData = {};
      for (var _i2 = 0, _Object$entries2 = Object.entries(payload); _i2 < _Object$entries2.length; _i2++) {
        var _Object$entries2$_i = _slicedToArray(_Object$entries2[_i2], 2),
          key = _Object$entries2$_i[0],
          value = _Object$entries2$_i[1];
        requestData[key] = value;
      }
      return requestData;
    }

    /**
     * Based on the knowledge/context, Soffos AI will now give you the data you need
     * @param {object} payload - the payload to be supplied into the fetch request
     */
  }, {
    key: "getResponse",
    value: function () {
      var _getResponse = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
        var payload,
          kwargs,
          _yield$this$validateP,
          _yield$this$validateP2,
          allowInput,
          message,
          data,
          response,
          response_data,
          url,
          headers,
          form,
          _args2 = arguments;
        return _regeneratorRuntime().wrap(function _callee2$(_context2) {
          while (1) switch (_context2.prev = _context2.next) {
            case 0:
              payload = _args2.length > 0 && _args2[0] !== undefined ? _args2[0] : {};
              kwargs = _args2.length > 1 && _args2[1] !== undefined ? _args2[1] : {};
              // the apiKey can also be a part of the payload.  This is usefull when defining apiKey in the pipeline.
              if ("apiKey" in payload) {
                this._apikey = payload.apiKey;
                delete payload.apiKey;
              }
              _context2.next = 5;
              return this.validatePayload(payload);
            case 5:
              _yield$this$validateP = _context2.sent;
              _yield$this$validateP2 = _slicedToArray(_yield$this$validateP, 2);
              allowInput = _yield$this$validateP2[0];
              message = _yield$this$validateP2[1];
              if ("question" in payload) {
                // The API receives the question as "message"
                payload["message"] = payload["question"];
              }
              if (allowInput) {
                _context2.next = 12;
                break;
              }
              throw new Error(message);
            case 12:
              if (this._service) {
                _context2.next = 14;
                break;
              }
              throw new Error("Please provide the service you need from Soffos AI.");
            case 14:
              data = this.getData(payload); // Call the API
              url = _index.SOFFOS_SERVICE_URL + this._service + "/";
              headers = {};
              if (!_index.FORM_DATA_REQUIRED.includes(this._service)) {
                headers["content-type"] = "application/json";
                headers["x-api-key"] = this._apikey;
                // response = await axios.post(url, data, {headers: headers});
              } else {
                form = new _formData["default"]();
                Object.keys(data).forEach(function (key) {
                  if (key == 'file') {
                    if (typeof data[key] === 'string') {
                      form.append(key, (0, _fs.createReadStream)(data[key]));
                    } else if (data[key].path) {
                      // if data[key] is file object attached by multer
                      form.append(key, (0, _fs.createReadStream)(data[key].path), {
                        filename: data[key].originalname,
                        contentType: data[key].mimetype
                      });
                    } else {
                      form.append(key, data[key]);
                    }
                  } else {
                    form.append(key, data[key]);
                  }
                });
                headers = form.getHeaders();
                headers["x-api-key"] = this._apikey;
                data = form;
              }
              _context2.prev = 18;
              _context2.next = 21;
              return _axios["default"].post(url, data, {
                headers: headers
              });
            case 21:
              response = _context2.sent;
              if (!(response.status >= 200 && response.status < 300)) {
                _context2.next = 26;
                break;
              }
              return _context2.abrupt("return", response.data);
            case 26:
              console.log('Request failed');
              return _context2.abrupt("return", response.data);
            case 28:
              _context2.next = 43;
              break;
            case 30:
              _context2.prev = 30;
              _context2.t0 = _context2["catch"](18);
              if (!_context2.t0.response) {
                _context2.next = 36;
                break;
              }
              return _context2.abrupt("return", {
                status: _context2.t0.response.status,
                error: _context2.t0.response.data
              });
            case 36:
              if (!_context2.t0.request) {
                _context2.next = 41;
                break;
              }
              console.log(_context2.t0.request);
              return _context2.abrupt("return", {
                code: _context2.t0.code,
                error: _context2.t0.message
              });
            case 41:
              console.log('Error', _context2.t0.message);
              return _context2.abrupt("return", {
                code: _context2.t0.code,
                error: _context2.t0.message
              });
            case 43:
            case "end":
              return _context2.stop();
          }
        }, _callee2, this, [[18, 30]]);
      }));
      function getResponse() {
        return _getResponse.apply(this, arguments);
      }
      return getResponse;
    }()
  }, {
    key: "cleanPayload",
    value: function cleanPayload(rawPayload) {
      var payload = {};
      if (Object.keys(rawPayload).length === 0) {
        throw new Error("There is no payload");
      }
      for (var k in rawPayload) {
        if (rawPayload[k] != null) {
          // if the value is null, we don't pass it to the payload
          payload[k] = rawPayload[k];
          if (k === "document_name" || k === "chatbot_name") {
            payload["name"] = rawPayload[k];
          } else if (k === "question") {
            payload["message"] = rawPayload[k];
          }
        }
      }
      return payload;
    }

    /**
     * Call the service
     * @param {object} kwargs 
     * @returns {object}
     */
  }, {
    key: "call",
    value: function call(payload) {
      var kwargs = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      var cleaned_payload = this.cleanPayload(payload);
      return this.getResponse(cleaned_payload, kwargs);
    }
  }, {
    key: "toString",
    value: function toString() {
      return this._service;
    }
  }, {
    key: "provideOutputType",
    value: function provideOutputType() {
      throw new Error('Abstract method provideOutputType must be implemented');
    }
  }, {
    key: "provideSourceType",
    value: function provideSourceType() {
      throw new Error('Abstract method provideSourceType must be implemented');
    }
  }, {
    key: "getDefaultOutputKey",
    value: function getDefaultOutputKey() {
      throw new Error('Abstract method getDefaultOutputKey must be implemented');
    }

    /** 
     * Prepare this Service for Pipeline use. Set the input configurations.
     * Define here where would this Service get its input, it can be a constant,
     * from user input, or from other Service inside the Pipeline.
     */
  }, {
    key: "setInputConfigs",
    value: function setInputConfigs(name, input_configs) {
      this.name = name;
      this.source = input_configs;
    }
  }]);
  return SoffosAIService;
}();
exports.SoffosAIService = SoffosAIService;