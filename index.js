function getFirstSelector (selector) {
  return document.querySelector(selector);
}

function nestedTarget () {
  return document.querySelector("#nested .target");
}

function increaseRankBy (n) {
  var rankedLists = document.querySelectorAll('.ranked-list');

  for (var i = 0, l = rankedLists.length; i < l; i++) {
    n = parseInt(n, 10);
    rankedLists[i].innerHTML = (i + n);
  }
}

function deepestChild() {
  let current = document.querySelector('div#grand-node');
  var child = current.querySelector('div');
  while (child) {
    current = child;
    child = current.querySelector('div');
    }
    return current;
}
