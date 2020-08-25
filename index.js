function getFirstSelector(selector) {
  var element = document.querySelector(selector);
  return element;
}

function nestedTarget() {
  var target = document.querySelector('#nested .target');
  return target;
}

function deepestChild() {
  var child = document.getElementById('grand-node').querySelectorAll('div');
  return child[child.length-1];
}

function increaseRankBy(n) {
  var upRank =   document.getElementById('app').querySelectorAll('ul.ranked-list li');

  for (let i = 0; i < upRank.length; i++) {
    upRank[i].innerHTML = ((parseInt(upRank[i].innerHTML)) + n);
  }
}
