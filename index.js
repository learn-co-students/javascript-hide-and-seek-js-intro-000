function getFirstSelector(selector) {
  return document.querySelector(selector);
}

function nestedTarget() {
  return document.querySelector("#nested .target");
}

function increaseRankBy(n) {
  const rankedLists = document.querySelectorAll(".ranked-list");
  for (let i = 0; i < rankedLists.length; i++) {
    var ranks = rankedLists[i].children;
    for (let j = 0; j < ranks.length; j++) {
      ranks[j].innerHTML = parseInt(ranks[j].innerHTML, 10) + n;
    }
  }
}

function deepestChild() {
  let currentNode = document.querySelector("#grand-node div");
  let nextNode = currentNode.children[0];
  while (nextNode) {
    currentNode = nextNode;
    nextNode = currentNode.children[0];
  }
  return currentNode;
}
