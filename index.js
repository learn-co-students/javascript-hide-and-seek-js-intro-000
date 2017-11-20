function getFirstSelector(selector) {
  return document.querySelector(selector);
}

function nestedTarget() {
  return document.querySelector('#nested .target')
}

function increaseRankBy(n) {
  var rankList = document.querySelectorAll('ul.ranked-list li');
  for (var i = 0; i < rankList.length; i++) {
    rankList[i].innerHTML = parseInt(rankList[i].innerHTML) + n;
  }
}

function deepestChild() {
  var gNode = document.querySelector('#grand-node');
  var deep = gNode.children[0];

  while(deep){
    gNode = deep // (since we have gNode.children[0] stored there )
    deep = gNode.children[0];
  }
  return gNode;
}
