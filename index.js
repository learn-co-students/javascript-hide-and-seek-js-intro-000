function getFirstSelector(selector) {
  return document.querySelector(selector)
}

function nestedTarget() {
  return document.querySelector("#nested .target")
}

function increaseRankBy(n) {
  var rcontents = document.querySelectorAll(".ranked-list li");
  for(var i = 0; i < rcontents.length; i++) {
  rcontents[i].innerHTML = parseInt(rcontents[i].innerHTML) + n;
  }
}

function deepestChild() {
  var rcontents = document.querySelectorAll("#grand-node div");
  return rcontents[rcontents.length - 1]
}
