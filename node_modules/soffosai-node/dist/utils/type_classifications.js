"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.get_serviceio_datatype = get_serviceio_datatype;
exports.get_userinput_datatype = get_userinput_datatype;
exports.isDictObject = isDictObject;
exports.isNodeInput = isNodeInput;
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
/**
 * Returns true if value is equivalent to python dictionary or object
 * @param {any} value 
 * @returns {boolean}
 */
function isDictObject(value) {
  return _typeof(value) === 'object' && value !== null && !Array.isArray(value);
}

/**
 * Determines if <value> is a valid Node input
 * @param {Object} value 
 * @returns {boolean}
 */
function isNodeInput(value) {
  return isDictObject(value) && "source" in value && "field" in value;
}

/**
 * In javascript there is no type class so this is a workaround to get the datatype
 * because sometimes the content of the serviceio field is an Array and is not defined as "array".
 * It also determines if an object is an Array.
 * @param {any} value 
 */
function get_serviceio_datatype(value) {
  if (value == null || value == undefined) {
    return "null";
  } else if (typeof value == "string") {
    return value;
  } else if (Array.isArray(value)) {
    return "array";
  } else {
    return "object";
  }
}

/**
 * Make the datatype more comprehensible
 * @param {any} value 
 * @returns 
 */
function get_userinput_datatype(value) {
  if (value == null || value == undefined) {
    return "null";
  } else if (Array.isArray(value)) {
    return "array";
  } else {
    return _typeof(value);
  }
}