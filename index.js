function getFirstSelector(selector) {
  return document.querySelector(selector);
}

function nestedTarget() {
  return document.getElementById('nested').querySelector('.target');
}

function deepestChild() {
  var nodesToSearch = [document.getElementById('grand-node')];

  while (nodesToSearch.length > 0) {
    var searchedNodes = nodesToSearch;
    nodesToSearch = flatmap(nodesToSearch, childrenArray);
  }

  return searchedNodes[0];
}

function childrenArray(parent) {
  return Array.prototype.concat.apply([], parent.children);
}

function flatmap(array, f) {
  return Array.prototype.concat.apply([], array.map(e => f(e)))
}

function increaseRankBy(n) {
  findTargetNodes().forEach(node => increaseNodeBy(node, n));
}

function findTargetNodes() {
  return Array.prototype.concat.apply([], document.querySelectorAll('ul.ranked-list li'));
}

function increaseNodeBy(node, n) {
  node.innerHTML = parseInt(node.innerHTML) + n;
}
