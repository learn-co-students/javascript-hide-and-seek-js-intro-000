function getFirstSelector(selector) {
  var element = document.querySelector(selector);
  return element;
}

function nestedTarget() {
  var nested, element;
  nested = document.getElementById('nested');
  element = nested.getElementsByClassName('target');

  return element[0];
}

function increaseRankBy(n) {
  var list = document.querySelectorAll('ul.ranked-list li');
  for (var i = 0; i < list.length; i++) {
    var val = parseInt(list[i].innerHTML, 10);
    list[i].innerHTML = val + n;
  }
}

function deepestChild() {
  var deepest = document.querySelector('div#grand-node');
  while (deepest.hasChildNodes()) {
    var next = deepest.firstElementChild;
    if (next === null) {
      break;
    }
    deepest = next;
  }

  return deepest;
}
