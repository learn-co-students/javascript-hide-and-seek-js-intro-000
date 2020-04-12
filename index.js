function getFirstSelector(selector) {
  return document.querySelector(selector);
}
function nestedTarget(){
  return document.querySelector('div#nested .target');
}
function deepestChild() {
  var nodes = document.querySelectorAll('#grand-node div');
  var deepestNode = nodes[nodes.length - 1];
  return deepestNode;
}
function increaseRankBy(n) {
  var rankedList = document.querySelectorAll('.ranked-list li');
  for (var i = 0; i < rankedList.length; i++) {
    rankedList[i].innerHTML = parseInt(rankedList[i].innerHTML, 10) + n;
  }
}
