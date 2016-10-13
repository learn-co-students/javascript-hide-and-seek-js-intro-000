function getFirstSelector( selector ) {
  return document.querySelector(selector);
}

function nestedTarget() {
  return document.querySelector('#nested .target');
}

function increaseRankBy(n) {
  const lis = document.getElementById('app').querySelectorAll('ul.ranked-list li')

  for (let i = 0, l = lis.length; i < l; i++) {
    lis[i].innerHTML = parseInt(lis[i].innerHTML) + n;
  }
}

function deepestChild() {
  var node = document.querySelector('#grand-node');
  var items = node.getElementsByTagName("*");
  var lastItem = items.length - 1;
  return items[lastItem];
}
