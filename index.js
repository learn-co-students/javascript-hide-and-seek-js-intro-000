function getFirstSelector(selector) {
  return document.querySelector(selector);
}

function nestedTarget() {
 return document.querySelector('#nested .target');
}

function deepestChild() {
  let node = document.getElementById('grand-node');
  let child = node.children[0];

  while (child) {
    node = child;
    child = node.children[0];
  }

  return node;
}

function increaseRankBy(n) {
  let nodes = document.querySelectorAll('.ranked-list');
  let array = [];

  nodes.forEach(function(node) {
    var children = node.children;
    array = array.concat(children);
  });

  array.forEach(function(child) {
    for (var i = 0; i < child.length; i++) {
      let number = parseInt(child[i].innerHTML)
      number += n;
      child[i].innerHTML = number;
    }
  });
}
