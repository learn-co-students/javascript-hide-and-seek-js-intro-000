function getFirstSelector(selector) {
  var mySelector = document.querySelector(selector);
  return mySelector;
}
function nestedTarget() {
  var nT = document.querySelector( "#nested .target");
  return nT;
}

function increaseRankBy(n) {
  var lis = document.querySelectorAll("ul.ranked-list li");
  for (var i = 0, l = lis.length; i < l; i++) {
    lis[i].innerHTML = parseInt(lis[i].innerHTML, 10) + n;
  }
  return lis;
}
function deepestChild() {
  var getId = document.querySelector("#grand-node");
  var getSub = getId.querySelectorAll("div");
  return getSub[getSub.length - 1];
}
