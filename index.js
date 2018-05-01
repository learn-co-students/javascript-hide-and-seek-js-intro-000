function getFirstSelector(selector) {
  return(document.querySelector(selector));
}

function nestedTarget() {
  var g = document.querySelector("#nested");
  return(g.querySelector(".target"));
}

function increaseRankBy(n) {
  const lis = document.querySelectorAll(".ranked-list");
  for (let i = 0; i < lis.length; i++) {
    lis[i].innerHTML = (i + n).toString();
  }
}

function deepestChild() {
  const lis = document.getElementById("grand-node").querySelectorAll("div");
  var output;
  for(let i = 0; i<lis.length-1; i++) {
    output=lis[i].querySelector("div");
  }
  return output;
}
