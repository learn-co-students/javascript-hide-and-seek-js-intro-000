function getFirstSelector(selector) {
return document.querySelector(selector);
}

function nestedTarget() {
return document.getElementById('nested').querySelector('div.target');

}

function increaseRankBy(n) {
var ranks = document.querySelectorAll('ul.ranked-list li');
  for (let i = 0; i < ranks.length; i++){
    ranks[i].innerHTML = parseInt(ranks[i].innerHTML) + n;
  }

}

function deepestChild() {
  var drag = document.getElementById('grand-node').querySelectorAll('div');
  return drag[drag.length-1];
}
