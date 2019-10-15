// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
// This function returns an array-like object of all child elements which
// have all of the given class names. When called on the document object,
// the complete document is searched, including the root node.
// You may also call getElementsByClassName() on any element;
// it will return only elements which are descendants of the specified
// root element with the given class names.
var getElementsByClassName = function(targetClassName) {
  var results = [];
  function checkNode(node) {
    if (node.className) {
      var classList = node.className;
      classList = classList.split(' ');
      for (var i = 0; i < classList.length; i++) {
        if (classList[i] === targetClassName) {
          results.push(node);
        }
      }
    }
    var children = node.childNodes;
    //children.forEach(checkNode());
    for (let child of children) {
      checkNode(child);
    }

  }
  checkNode(document.body);
  return results;
};
