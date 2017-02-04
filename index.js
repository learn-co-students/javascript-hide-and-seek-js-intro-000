function getFirstSelector(selector) {
  return document.querySelector(selector);
}

function nestedTarget() {
  return document.querySelector('#nested .target');
}

function increaseRankBy(n) {
  var list = document.querySelectorAll('ul.ranked-list li');
  for (var i = 0; i < list.length; i++) {
    list[i].innerHTML = parseInt(list[i].innerHTML) + n;
  }
}

function deepestChild() {
  var grande = document.querySelectorAll('div#grand-node div');
  return grande[grande.length - 1];
}
