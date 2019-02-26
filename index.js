function getFirstSelector(selector) {
  return document.querySelector(selector);
}

function nestedTarget() {
  return document.querySelector("#nested .target");
}

function increaseRankBy(n) {
  const divs = document.querySelectorAll('.ranked-list');

  for (let i = 0; i < divs.length; i++) {
    var children = divs[i].children;
    for (let k = 0; k < children.length; k++) {
      children[k].innerHTML = parseInt(children[k].innerHTML) + n;
    }
  }
}

function deepestChild() {
  var grandNode = document.querySelector('#grand-node');
  var deepestNode = grandNode.children[0];
  while(deepestNode.children[0]) {
    deepestNode = deepestNode.children[0];
  }
  return deepestNode;
}
