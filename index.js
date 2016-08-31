function getFirstSelector(selector) {
  return document.querySelector(selector);
}

function nestedTarget() {
  return document.getElementById("nested").querySelector(".target");
}

function increaseRankBy(n) {
  var list = document.querySelectorAll(".ranked-list li");
  for(var i = 0; i < list.length; i++) {
    list[i].innerHTML = Number(list[i].innerHTML) + n;
  }
}

function deepestChild() {
  var target = document.querySelector("div#grand-node")
  while(target.querySelector("div")) {
    target = target.querySelector("div");
  }
  return target;
}
