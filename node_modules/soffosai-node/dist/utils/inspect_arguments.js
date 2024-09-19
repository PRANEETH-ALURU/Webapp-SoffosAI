"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.inspectArguments = inspectArguments;
/**
 * Converts arguments to key, value pair object
 * @param {function} func 
 * @param  {...any} args 
 * @returns {string}
 */
function inspectArguments(func) {
  var parameterNames = func.toString().replace(/[/][/].*$/mg, '') // Remove single-line comments
  .replace(/\s+/g, '') // Remove white space
  .replace(/[/][*][^/*]*[*][/]/g, '') // Remove multi-line comments
  .split(')')[0].split('(')[1].split(',').map(function (param) {
    return param.split('=')[0];
  });
  var converted = {};
  for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    args[_key - 1] = arguments[_key];
  }
  for (var i = 0; i < parameterNames.length; i++) {
    if (args[i] != null && args[i] != undefined) {
      converted[parameterNames[i]] = args[i];
    }
  }
  return converted;
}