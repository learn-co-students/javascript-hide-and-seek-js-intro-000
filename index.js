function getFirstSelector(selector) {
  return document.querySelector(selector);
}

function nestedTarget() {
  return document.querySelector("#nested .target")
}

function increaseRankBy(n) {
  var rankedList = document.querySelectorAll(".ranked-list")
  for (var i = 0; i < rankedList.length; i++) {
    var children = rankedList[i].children
    for (var j = 0; j < children.length; j++) {
      children[j].innerHTML = parseInt(children[j].innerHTML) + n
    }
  }
}

function deepestChild() {
  var node = document.querySelector("#grand-node")
  var innerNode = node.children[0]
  while (innerNode) {
    node = innerNode
    innerNode=node.children[0]
  }
  return node
}