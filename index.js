
function getFirstSelector(selector) {
  return document.querySelector(selector);
}

function nestedTarget() {
  return document.getElementById('nested').querySelector('div.target');
}

function increaseRankBy(n) {
  const rankedLlist = document.querySelectorAll('ul.ranked-list');
  for (let i=0; i<rankedLlist.length; i++) {
    let child = rankedLlist[i].children;
    for (let j=0; j<child.length; j++) {
      child[j].innerHTML = parseInt(child[j].innerHTML) + n;
    }
  }
}

function deepestChild() {
  let node = document.querySelector('div#grand-node');
  let nextNode = node.children[0];
  while (nextNode) {
    node = nextNode;
    nextNode = node.children[0];
  }
  return node;
}
