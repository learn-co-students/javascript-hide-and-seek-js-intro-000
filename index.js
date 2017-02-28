function getFirstSelector(selector) {
  return document.querySelector(selector);
}

function nestedTarget() {
  return document.querySelector("#nested .target");
}

function increaseRankBy(n) {
  var lists = document.querySelectorAll('.ranked-list > li');
  for (let i = 0; i < lists.length; i++) {
    lists[i].innerHTML = parseInt(lists[i].innerHTML) + n;
  }
}

function deepestChild() {
  var root = document.querySelector('div#grand-node');
  var elt;
  while (typeof root !== 'undefined') {
    elt = root;
    root = root.children[0];
  }
  return elt;
}
