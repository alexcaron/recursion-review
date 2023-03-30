// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {
  if (obj === undefined || typeof obj === 'function') {
    return;
  }
  if (obj === null) {
    return 'null';
  }
  if (typeof obj === 'string') {
    return '"' + obj + '"';
  }
  if (typeof obj !== 'object') {
    return obj.toString();
  }

  var result = '';
  if (Array.isArray(obj)) {
    result += '[';
    obj.forEach(function(val, index, array) {
      result += stringifyJSON(val);
      if (index < array.length - 1) {
        result += ',';
      }
    });
    result += ']';
    return result;
  }

  result += '{';
  for (var key in obj) {
    var value = stringifyJSON(obj[key]);
    if (value) {
      result += '"' + key.toString() + '":';
      result += stringifyJSON(obj[key]);
      result += ',';
    }
  }
  if (result.endsWith(',')) {
    result = result.slice(0, result.length - 1);
  }
  return result + '}';
};
