function getFirstSelector(selector) {
  return document.querySelector(selector);
}

function nestedTarget(){
  return document.getElementById('nested').querySelector('.target');
}

function deepestChild() {
  var node = document.getElementById('grand-node');
  var nextNode = node.children[0];

  while (nextNode) {
    node = nextNode;
    nextNode = node.children[0];
  }

  return node;
}

function increaseRankBy(n) {
  var rankedList = document.querySelectorAll('.ranked-list');

  for (var i = 0; i < rankedList.length; i++) {
    var children = rankedList[i].children;

    for (var j = 0; j < children.length; j++) {
      children[j].innerHTML = parseInt(children[j].innerHTML) + n;
    }
  }
}
