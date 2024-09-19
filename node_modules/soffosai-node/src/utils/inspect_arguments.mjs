/**
 * Converts arguments to key, value pair object
 * @param {function} func 
 * @param  {...any} args 
 * @returns {string}
 */
function inspectArguments(func, ...args) {
    const parameterNames = func.toString()
      .replace(/[/][/].*$/mg, '') // Remove single-line comments
      .replace(/\s+/g, '') // Remove white space
      .replace(/[/][*][^/*]*[*][/]/g, '') // Remove multi-line comments
      .split(')')[0]
      .split('(')[1]
      .split(',')
      .map((param) => param.split('=')[0]);
  
    const converted = {};
    for (let i = 0; i < parameterNames.length; i++) {
      if (args[i] != null && args[i] != undefined) {
        converted[parameterNames[i]] = args[i];
      }
    }
    return converted;
}

export {inspectArguments}