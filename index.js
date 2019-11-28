function getFirstSelector(selector) {
  return document.querySelector(selector);
}
function nestedTarget() {
  return document.querySelector('#nested .target');
}
function deepestChild() {
  return document.querySelector('#grand-node div div div div')
}
function increaseRankBy(n) {
  var listItems = document.querySelectorAll('.ranked-list li');
  for (var i = 0; i < listItems.length; i++) {
    listItems[i].innerHTML = (parseInt(listItems[i].innerHTML) + n).toString();
  }
}
