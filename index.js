function getFirstSelector(selector) {
  return document.querySelector(selector);
}

function nestedTarget() {
  return document.querySelector('#nested .target');
}

function increaseRankBy(n) {
  let elements = document.querySelectorAll('ul.ranked-list li');

  for (let i = 0, l = elements.length; i < l; i++) {
    elements[i].innerHTML = (parseInt(elements[i].innerHTML,10) + n).toString()
  }
}

function deepestChild() {
  var node = document.querySelector('div#grand-node');
  var deepest = null;
  while (node) {
    deepest=node;
    node = node.querySelector('*');
  }
  return deepest;
}