function getFirstSelector(selector) {
  const el1 = document.querySelector(selector);
  return el1;
}
function nestedTarget() {
  const el2 = document.getElementById("nested").getElementsByClassName("target")[0];
  return el2;
}
function increaseRankBy(n) {
  const el3 = document.getElementById("app").getElementsByClassName("ranked-list");
  for (let i = 0; i < el3.length; i++) {
    el3[i].innerHTML = parseInt(el3[i]);
  }
  return el3;
}
function deepestChild() {
  const el4 = document.querySelectorAll("#grand-node div");
  if (!el4.length) {return
    false; } else {
      return el4[el4.length -1];
    }
}
