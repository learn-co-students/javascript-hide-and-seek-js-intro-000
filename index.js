function getFirstSelector(selector) {
  return document.querySelector(selector);
}

function nestedTarget() {
  document.querySelector('#nested .target');
}

function increaseRankBy(n) {
  const rList = document.querySelectorAll('.ranked-list');
  for(let i = 0; i < rList.length; i++) {
    let children = rList[i].children;
    for(let j = 0; j < children.length; i++) {
      children[j].innerHTML = parseInt(children[j].innerHTML) + n;
    }
  }
}

function deepestChild() {
  let node = document.getElementById('grand-node');
  let nextNode = node.children[0];
  while(nextNode) {
    node = nextNode;
    nextNode = node.children[0];
  }
  return node;
}