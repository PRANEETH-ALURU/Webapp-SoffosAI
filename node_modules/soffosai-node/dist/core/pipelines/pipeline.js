"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Pipeline = void 0;
var _index = require("../services/index.js");
var _type_classifications = require("../../utils/type_classifications.js");
var _pipeline_preprocesses = require("../../utils/pipeline_preprocesses.js");
var _config = require("../../common/config.js");
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, defineProperty = Object.defineProperty || function (obj, key, desc) { obj[key] = desc.value; }, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return defineProperty(generator, "_invoke", { value: makeInvokeMethod(innerFn, self, context) }), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; defineProperty(this, "_invoke", { value: function value(method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; } function maybeInvokeDelegate(delegate, context) { var methodName = context.method, method = delegate.iterator[methodName]; if (undefined === method) return context.delegate = null, "throw" === methodName && delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method) || "return" !== methodName && (context.method = "throw", context.arg = new TypeError("The iterator does not provide a '" + methodName + "' method")), ContinueSentinel; var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, defineProperty(Gp, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), defineProperty(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (val) { var object = Object(val), keys = []; for (var key in object) keys.push(key); return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i["return"] && (_r = _i["return"](), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e2) { throw _e2; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e3) { didErr = true; err = _e3; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function is_service_input(value) {
  if (_typeof(value) != 'object') {
    return false;
  }
  return value.hasOwnProperty('source') && value.hasOwnProperty('field');
}

/**
 * A controller for consuming multiple SoffosAIServices.
 * It validates all inputs of all SoffosAIService before sending the first Soffos API request to ensure
 * that the Pipeline will not waste credits.
 * 
 * ** use_defaults=true means that SoffosAIService will take input from the previous SoffosAIService' 
 * output of the same field name prioritizing the latest Service's output. 
 * If the previous SoffosAIService does not have it, it will take from the
 * pipeline's user_input.  Also, the SoffosAIService will only be supplied with the required fields + default
 * of the require_one_of_choices fields.
 * 
 */
var Pipeline = /*#__PURE__*/function () {
  /**
   * @param {Array.<object>} services 
   * @param {boolean} [ use_defaults=false ]
   * @param {string} [name]
   * @param {Object} [ kwargs={} ]
   */
  function Pipeline(services) {
    var use_defaults = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
    var name = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
    var kwargs = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};
    _classCallCheck(this, Pipeline);
    var apiKey = null;
    if (kwargs.apiKey) {
      apiKey = kwargs.apiKey;
    } else {
      apiKey = _config.SoffosConfig.apiKey;
    }
    if (!apiKey) {
      throw TypeError("API key not provided.");
    }
    this.apiKey = apiKey;
    this._stages = services;
    this._input = {};
    this._infos = {};
    this._use_defaults = use_defaults;
    this._executionCodes = [];
    this._termination_codes = [];
    var error_messages = [];
    if (!Array.isArray(services)) {
      error_messages.push("stages field should be a list of SoffosAIService");
    }
    var serviceNames = services.map(function (service) {
      return service.name;
    });
    var _iterator = _createForOfIteratorHelper(services),
      _step;
    try {
      var _loop = function _loop() {
        var service = _step.value;
        if (!(service instanceof _index.SoffosAIService) && !(service instanceof Pipeline)) {
          error_messages.push("".concat(service, " is not an instance of SoffosAIService"));
        }
        var count = serviceNames.filter(function (n) {
          return n === service.name;
        }).length;
        if (count > 1) {
          error_messages.push("Service name '".concat(service.name, "' is not unique."));
        }
      };
      for (_iterator.s(); !(_step = _iterator.n()).done;) {
        _loop();
      }
    } catch (err) {
      _iterator.e(err);
    } finally {
      _iterator.f();
    }
    if (error_messages.length !== 0) {
      throw new Error(error_messages.join("\n"));
    }

    // when the pipeline is used as a pipeline input, it needs a name
    this.name = name;
  }

  /**
   * Run the Pipeline
   * @param {object} user_input - The object that holds the input information including executionCode if needed.
   * @returns {object} The response object from soffosai.
   */
  _createClass(Pipeline, [{
    key: "run",
    value: function () {
      var _run = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(user_input) {
        var original_user_input, stages, executionCode, infos, total_cost, i, index_from_execution, index_from_termination, stage, _response, pipeOutput, key, subkey, temp_payload, payload, _i, _Object$entries, _Object$entries$_i, _key, notation, input_dict, value, response, exec_code_index;
        return _regeneratorRuntime().wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              original_user_input = user_input;
              if ((0, _type_classifications.isDictObject)(user_input)) {
                _context.next = 3;
                break;
              }
              throw new Error("Invalid user input.");
            case 3:
              if ("user" in user_input) {
                _context.next = 5;
                break;
              }
              throw new ReferenceError("'user' is not defined in user_input.");
            case 5:
              if ("text" in user_input) {
                user_input.document_text = this._input.text;
              }
              if ("question" in user_input) {
                user_input.message = user_input.question;
              }
              if (this._use_defaults) {
                stages = this.setDefaults(this._stages, user_input);
              } else {
                stages = this._stages;
              }
              executionCode = user_input.executionCode;
              if (!(executionCode != null && executionCode != undefined)) {
                _context.next = 16;
                break;
              }
              executionCode = this.apiKey + executionCode;
              if (!this._executionCodes.includes(executionCode)) {
                _context.next = 15;
                break;
              }
              return _context.abrupt("return", {
                "error": "You are still using this execution code in a current pipeline run."
              });
            case 15:
              this._executionCodes.push(executionCode);
            case 16:
              infos = {};
              this.validate_pipeline(stages, user_input);
              infos.user_input = user_input;
              total_cost = 0.00; // Execute per stage:
              i = 0;
            case 21:
              if (!(i < stages.length)) {
                _context.next = 81;
                break;
              }
              if (!this._termination_codes.includes(executionCode)) {
                _context.next = 31;
                break;
              }
              // remove the execution code from both termination codes and execution codes
              index_from_execution = this._executionCodes.indexOf(executionCode);
              if (index_from_execution > -1) {
                this._executionCodes.splice(index_from_execution, 1);
              }
              index_from_termination = this._termination_codes.indexOf(executionCode);
              if (index_from_termination > -1) {
                this._termination_codes.splice(index_from_termination, 1);
              }

              // return values that are ready:
              infos.total_call_cost = total_cost;
              infos.warning = "This Soffos Pipeline run is prematurely terminated.";
              infos.user_input = original_user_input;
              return _context.abrupt("return", infos);
            case 31:
              stage = stages[i];
              console.log("Running ".concat(stage.name));
              if (!(stage instanceof Pipeline)) {
                _context.next = 43;
                break;
              }
              _context.next = 36;
              return stage.run(user_input);
            case 36:
              _response = _context.sent;
              console.log("Response ready for ".concat(stage.name, "."));
              pipeOutput = {};
              pipeOutput.costs = {};
              for (key in _response) {
                if (key !== 'total_call_cost') {
                  for (subkey in _response[key]) {
                    if (subkey == 'cost') {
                      pipeOutput['costs'][key] = _response[key][subkey];
                    } else if (subkey == 'charged_character_count') {
                      pipeOutput['costs'][key]['charged_character_count'] = _response[key][subkey];
                    } else if (subkey == 'unit_price') {
                      pipeOutput['costs'][key]['unit_price'] = _response[key][subkey];
                    } else {
                      pipeOutput[subkey] = _response[key][subkey];
                    }
                  }
                } else {
                  total_cost += _response[key];
                }
              }
              infos[stage.name] = pipeOutput;
              return _context.abrupt("continue", 78);
            case 43:
              temp_payload = stage.source;
              payload = {};
              _i = 0, _Object$entries = Object.entries(temp_payload);
            case 46:
              if (!(_i < _Object$entries.length)) {
                _context.next = 66;
                break;
              }
              _Object$entries$_i = _slicedToArray(_Object$entries[_i], 2), _key = _Object$entries$_i[0], notation = _Object$entries$_i[1];
              if (notation instanceof _index.InputConfig) {
                input_dict = {
                  source: notation.source,
                  field: notation.field
                };
                if (notation.pre_process) {
                  input_dict.pre_process = notation.pre_process;
                }
                notation = input_dict;
              }
              if (!is_service_input(notation)) {
                _context.next = 62;
                break;
              }
              // value is a reference to a service or user input
              value = infos[notation.source][notation.field];
              if (!("pre_process" in notation)) {
                _context.next = 59;
                break;
              }
              if (!(notation.pre_process instanceof Function)) {
                _context.next = 56;
                break;
              }
              payload[_key] = notation.pre_process(value);
              _context.next = 57;
              break;
            case 56:
              throw new Error("pre_process value should be a function");
            case 57:
              _context.next = 60;
              break;
            case 59:
              // no pre-processing required
              payload[_key] = value;
            case 60:
              _context.next = 63;
              break;
            case 62:
              // notation is a constant
              payload[_key] = notation;
            case 63:
              _i++;
              _context.next = 46;
              break;
            case 66:
              if (!('user' in payload)) {
                payload.user = user_input.user;
              }
              payload.apiKey = this.apiKey;
              _context.next = 70;
              return stage.getResponse(payload);
            case 70:
              response = _context.sent;
              if (!(response.error || !(0, _type_classifications.isDictObject)(response))) {
                _context.next = 75;
                break;
              }
              infos[stage.name] = response;
              console.log(response);
              return _context.abrupt("return", infos);
            case 75:
              console.log("Response ready for ".concat(stage.name));
              infos[stage.name] = response;
              total_cost += response.cost.total_cost;
            case 78:
              i++;
              _context.next = 21;
              break;
            case 81:
              infos.total_call_cost = total_cost;

              // remove the execution code from the executionCodes in effect Array.
              exec_code_index = this._executionCodes.indexOf(executionCode);
              if (exec_code_index > -1) {
                this._executionCodes.splice(exec_code_index, 1);
              }
              return _context.abrupt("return", infos);
            case 85:
            case "end":
              return _context.stop();
          }
        }, _callee, this);
      }));
      function run(_x) {
        return _run.apply(this, arguments);
      }
      return run;
    }()
    /**
     * Validates the Pipeline construction vs the user_input before sending the first API call.
     * Throws errors when not valid.
     * @param {object} user_input 
     * @param {SoffosAIService[]} stages 
     * @returns 
     */
  }, {
    key: "validate_pipeline",
    value: function validate_pipeline(stages, user_input) {
      var error_messages = [];
      var _loop2 = function _loop2() {
        var stage = stages[i];
        var sub_pipe_stages;
        if (stage instanceof Pipeline) {
          if (stage._use_defaults) {
            sub_pipe_stages = stage.setDefaults(stage._stages, user_input);
          } else {
            sub_pipe_stages = stage._stages;
          }
          stage.validate_pipeline(sub_pipe_stages, user_input);
          return "continue";
        }
        // stage: SoffosAIService to be validated

        // check if required fields are present: already solved by making the SoffosAIService subclasses.

        // check if require_one_of_choices is present and not more than one
        var serviceio = stage._serviceio;
        if (serviceio.require_one_of_choices.length > 0) {
          var groupErrors = [];
          var _iterator2 = _createForOfIteratorHelper(serviceio.require_one_of_choices),
            _step2;
          try {
            for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
              var group = _step2.value;
              var foundChoices = group.filter(function (choice) {
                return choice in stage.source;
              });
              if (foundChoices.length === 0) {
                groupErrors.push("".concat(stage.name, ": Please provide one of these values on your payload: ").concat(group));
              } else if (foundChoices.length > 1) {
                groupErrors.push("".concat(stage.name, ": Please only include one of these values: ").concat(group));
              }
            }
          } catch (err) {
            _iterator2.e(err);
          } finally {
            _iterator2.f();
          }
          if (groupErrors.length > 0) {
            var error_message = groupErrors.join(". ");
            throw new TypeError(error_message);
          }
        }

        // check if datatypes are correct
        for (var _i2 = 0, _Object$entries2 = Object.entries(stage.source); _i2 < _Object$entries2.length; _i2++) {
          var _Object$entries2$_i = _slicedToArray(_Object$entries2[_i2], 2),
            key = _Object$entries2$_i[0],
            notation = _Object$entries2$_i[1];
          var required_data_type = (0, _type_classifications.get_serviceio_datatype)(serviceio.input_structure[key]);
          if (notation instanceof _index.InputConfig) {
            var input_dict = {
              source: notation.source,
              field: notation.field
            };
            if (notation.pre_process) {
              input_dict.pre_process = notation.pre_process;
            }
            notation = input_dict;
          }
          if (is_service_input(notation)) {
            if ("pre_process" in notation) continue; // skip validation if there is a helper function

            var reference_service_name = notation.source;
            var required_key = notation.field;
            if (reference_service_name == "user_input") {
              var input_datatype = (0, _type_classifications.get_userinput_datatype)(user_input[required_key]);
              if (required_data_type != input_datatype && required_data_type != 'null') {
                error_messages.push("On ".concat(stage.name, " service: ").concat(required_data_type, " required on user_input '").concat(required_key, "' field but ").concat(input_datatype, " is provided."));
              }
            } else {
              var source_service_found = false;
              var _iterator3 = _createForOfIteratorHelper(stages),
                _step3;
              try {
                for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
                  var subservice = _step3.value;
                  if (reference_service_name == subservice.name) {
                    source_service_found = true;
                    if (subservice instanceof Pipeline) {
                      break;
                    }
                    var output_datatype = (0, _type_classifications.get_serviceio_datatype)(subservice._serviceio.output_structure[required_key]);
                    if (output_datatype == 'null') {
                      error_messages.push("On ".concat(stage.name, " service: the reference service '").concat(reference_service_name, "' does not have ").concat(required_key, " key on its output."));
                    }
                    if (required_data_type != output_datatype && required_data_type != 'null') {
                      error_messages.push("On ".concat(stage.name, " service: The input datatype required for field ").concat(key, " is ").concat(required_data_type, ". This does not match the datatype to be given by service ").concat(subservice.name, "'s ").concat(notation.field, " field which is ").concat(output_datatype, "."));
                    }
                    break;
                  }
                }
              } catch (err) {
                _iterator3.e(err);
              } finally {
                _iterator3.f();
              }
              if (!source_service_found) {
                error_messages.push("service '".concat(reference_service_name, "' is not found."));
              }
            }
          } else {
            if ((0, _type_classifications.get_userinput_datatype)(notation) == required_data_type || required_data_type == 'null') {
              stage._payload[key] = notation;
            } else {
              error_messages.push("On ".concat(stage.name, " service: ").concat(key, " requires ").concat(required_data_type, " but ").concat(_typeof(notation), " is provided."));
            }
          }
        }
      };
      for (var i = 0; i < stages.length; i++) {
        var _ret = _loop2();
        if (_ret === "continue") continue;
      }
      if (error_messages.length != 0) {
        throw new Error(error_messages.join(","));
      }
      return true;
    }

    /**
     * Adds a service at the end of the service list/stages.
     * @param {SoffosAIService} service 
     */
  }, {
    key: "add_service",
    value: function add_service(service) {
      if (service instanceof _index.SoffosAIService || service instanceof Pipeline) {
        this._stages.push(service);
      } else {
        throw new Error("".concat(service, " is not a SoffosAIService nor a SoffosPipeline instance."));
      }
    }

    /**
     * 
     * @param {SoffosAIService[]} stages
     * @param {object} user_input
     * @returns {SoffosAIService[]}
     */
  }, {
    key: "setDefaults",
    value: function setDefaults(stages, user_input) {
      var defaulted_stages = [];
      for (var i = 0; i < stages.length; i++) {
        var stage = stages[i];
        if (stage instanceof Pipeline) {
          continue;
        }
        var stage_source = {};
        // enumerate the required inputs of this stage
        var required_keys = stage._serviceio.required_input_fields;
        var require_one_of_choices = stage._serviceio.require_one_of_choices;
        if (require_one_of_choices) {
          if (require_one_of_choices.length > 0) {
            for (var j = 0; j < require_one_of_choices.length > 0; j++) {
              required_keys.push(require_one_of_choices[j][0]);
            }
          }
        }

        // starting from the last output, check if the required input data is available
        // if not, get it from the user_input
        // if input is defined, use its definition
        var _iterator4 = _createForOfIteratorHelper(required_keys),
          _step4;
        try {
          for (_iterator4.s(); !(_step4 = _iterator4.n()).done;) {
            var required_key = _step4.value;
            if (stage.source[required_key] != "default") {
              stage_source[required_key] = stage.source[required_key];
              continue;
            }
            var found_input = false;
            for (var _j = i - 1; _j >= 0; _j--) {
              var stage_for_output = stages[_j];
              var stage_for_output_output_fields = stage_for_output._serviceio.output_structure;
              if (required_key in stage_for_output_output_fields) {
                stage_source[required_key] = {
                  source: stage_for_output.name,
                  field: required_key
                };
                found_input = true;
              }
              // special considerations
              else if (required_key == "context" && "text" in stage_for_output_output_fields) {
                stage_source.context = {
                  source: stage_for_output.name,
                  field: "text"
                };
                found_input = true;
              } else if (required_key == "document_text" && "text" in stage_for_output_output_fields) {
                stage_source.document_text = {
                  source: stage_for_output.name,
                  field: "text"
                };
                found_input = true;
              } else if (required_key == "document_ids" && "document_id" in stage_for_output_output_fields) {
                stage_source.document_ids = {
                  source: stage_for_output.name,
                  field: "document_id",
                  pre_process: _pipeline_preprocesses.put_doc_id_to_array
                };
                found_input = true;
              }
            }
            if (!found_input) {
              if (required_key in user_input) {
                stage_source[required_key] = user_input[required_key];
                stage_source[required_key] = {
                  source: "user_input",
                  field: required_key
                };
              } else {
                throw new ReferenceError("Please add ".concat(required_key, " to user_input. The previous Services' outputs do not provide this data."));
              }
            }
          }
        } catch (err) {
          _iterator4.e(err);
        } finally {
          _iterator4.f();
        }
        var defaulted_stage = new _index.SoffosAIService(stage.service);
        defaulted_stage.set_input_configs(stage.name, stage_source);
        defaulted_stages.push(defaulted_stage);
      }
      return defaulted_stages;
    }

    /**
     * Discontinue the execution of remaining Services in the pipeline run
     * @param {string} termination_code 
     */
  }, {
    key: "terminate",
    value: function () {
      var _terminate = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2(termination_code) {
        return _regeneratorRuntime().wrap(function _callee2$(_context2) {
          while (1) switch (_context2.prev = _context2.next) {
            case 0:
              if (!termination_code) {
                _context2.next = 3;
                break;
              }
              this._termination_codes.push(this.apiKey + termination_code);
              return _context2.abrupt("return", {
                "message": "Request to terminate job \"".concat(termination_code, "\" received.")
              });
            case 3:
              return _context2.abrupt("return", {
                "message": "Request to terminate job is not valid (execution code missing)."
              });
            case 4:
            case "end":
              return _context2.stop();
          }
        }, _callee2, this);
      }));
      function terminate(_x2) {
        return _terminate.apply(this, arguments);
      }
      return terminate;
    }()
  }]);
  return Pipeline;
}();
exports.Pipeline = Pipeline;