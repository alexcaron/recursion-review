var getElementsByClassName = function(className) {
  result = [];

  var check = function(className, element) {
    // check if element has class; if so, add to result
    if (element.classList && element.classList.contains(className)) {
      result.push(element);
    }
    // run check on each child
    for (let child of element.childNodes) {
      check(className, child);
    }
  };

  check(className, document.body);

  return result;
};