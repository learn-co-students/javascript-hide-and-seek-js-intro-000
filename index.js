function getFirstSelector(selector) {
  return document.querySelector(selector);
}

function nestedTarget() {
  return document.querySelector('#nested .target')
}

function increaseRankBy(n) {
  var rankedLists = document.querySelectorAll('.ranked-list');
  for (let i = 0; i < rankedLists.length; i++) {
    var c = parseInt(rankedLists[i].textContent);
    rankedLists[i].textContent = `${c + n}`;
  }
}

function deepestChild() {
  var grandNode = document.querySelector('div#grand-node');
  var childNode = grandNode.children[0];
  while (childNode.children[0]) {
    childNode = childNode.children[0];
  }
  return childNode;
}
