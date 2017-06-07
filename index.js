function getFirstSelector(selector) {
  var firstSelector = document.querySelector(selector);
  return firstSelector;
}

function nestedTarget() {
  var nestedSelector = document.querySelector("#nested .target");
  return nestedSelector;
}

function increaseRankBy(n) {
  var rank = document.querySelectorAll(".ranked-list");
  for (var i = 0; i < rank.length; i++) {
    rank[i].innerHTML = parseInt(rank[i].innerHTML) + n;
  }
  return rank;
}

function deepestChild() {
  var selector = document.querySelector("div#grand-node");
  var deepestChild = selector.children[0];
  for (var i = 0; deepestChild.children[0]; i) {
    deepestChild = deepestChild.children[0];
  }
  return deepestChild;
}
