function getFirstSelector(selector) {
  return document.querySelector(selector);
}

function nestedTarget() {
  return document.querySelector("#nested .target");
}

function deepestChild() {
  var lis = document.getElementById("grand-node").querySelectorAll("div");
  return lis[lis.length - 1];
}

function increaseRankBy(n) {
  var lis = document.querySelectorAll("ul.ranked-list li");
  for (var i = 0; i < lis.length; i++) {
    lis[i].innerHTML = parseInt(lis[i].innerHTML) + n
  }
}
