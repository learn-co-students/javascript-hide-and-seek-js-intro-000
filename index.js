function getFirstSelector(selector) {
  return document.querySelector(selector)
}

function nestedTarget() {
  return document.querySelector('#nested .target')
}

function increaseRankBy(n) {
  var rankedLis = document.querySelectorAll('li');

  for (var i = 0; i < rankedLis.length; i++) {
      rankedLis[i].innerHTML = Number(rankedLis[i].innerHTML)+Number(n)
  }
}

function deepestChild() {
  let node = document.getElementById('grand-node');
  let nextNode = node.children[0];

  while (nextNode) {
    node = nextNode;
    nextNode = node.children[0];
  }

  return node;
}
