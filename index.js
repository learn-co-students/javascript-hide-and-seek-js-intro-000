function getFirstSelector(selector) {
  return document.querySelector(selector);
}

function nestedTarget() {
  return document.querySelector('#nested .target');
}

function deepestChild() {
  let deepest = document.querySelector('#grand-node');
  while(deepest.firstElementChild!==null) {
    deepest = deepest.firstElementChild;
  }
  return deepest;
}

function increaseRankBy(n) {
  let targetNodes = document.querySelectorAll('.ranked-list li');
  for(let i=0; i<targetNodes.length; i++) {
    targetNodes[i].innerHTML = parseInt(targetNodes[i].innerHTML)+n;
  }
}
