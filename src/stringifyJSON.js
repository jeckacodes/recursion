// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {
  result = '';
  //function parseString takes in a single element and converts it to a string
  var parseString = function(arg) {
    if (typeof arg === 'number') {
      result += arg;
    } else if (typeof arg === 'boolean') {
      if (arg === false) {
        result += 'false';
      } else result += 'true';
    } else if (Array.isArray(arg)) {
      result += '[';
      for (var i = 0; i < arg.length; i++) {
        parseString(arg[i]);
        result += ',';
      }
      if (arg.length > 0) {
        result = result.substring(0, result.length-1);
      }
      result += ']';
    } else if (typeof arg === 'object') {
      cleanObj(arg);
      if (arg === null) {
        result += 'null';
      } else {
        result += '{';
        for (let key in arg) {
          result += '\"' + key + '\":';
          parseString(arg[key]);
          result += ',';
        }
        if (Object.keys(arg).length > 0) {
          result = result.substring(0, result.length-1);
        }
        result += '}';
      }
    } else if (typeof arg === 'string') {
      result += '\"' + arg + '\"';
    }
  }
  var cleanObj = function(obj) {
    for (let key in obj) {
      if (typeof obj[key] === 'undefined' || typeof obj[key] === 'function') {
        delete obj[key];
      }
    }
    return obj;
  }
  //call parseString for each element in obj
  parseString(obj);
  return result;
};
