function getFirstSelector(selector) {
  return document.querySelector(selector);
}

function nestedTarget() {
  return document.querySelector('#nested .target');
}

function increaseRankBy(n) {
  const ranks = document.querySelectorAll('.ranked-list li');

  for (let i = 0; i < ranks.length; i++) {
    ranks[i].innerHTML = parseInt(ranks[i].innerHTML) + n;
  }
}

function deepestChild() {
  // return document.querySelector("#grand-node div div div div"); // one line solution
  let currentNode = document.querySelector('#grand-node');
  let nextNode = currentNode.children[0];
  while(nextNode) {
    currentNode = nextNode;
    nextNode = currentNode.children[0];
  }
  return currentNode;
}
