function getFirstSelector(selector){
  return document.querySelector(selector);
}

function nestedTarget() {
  return document.querySelector('#nested .target');
}

function increaseRankBy(n) {
  const rankedList = document.querySelectorAll('.ranked-list');

  for (let i = 0; i < rankedList.length; i++) {
    let children = rankedList[i].children;

    for (let v = 0; v < children.length; v++) {
      children[v].innerHTML = parseInt(children[v].innerHTML) + n;
    }
  }
}

function deepestChild() {
  let parent = document.getElementById('grand-node');
  let child = parent.children[0];

  while (child) {
    parent = child;
    child = parent.children[0];
  }
  return parent;
}
