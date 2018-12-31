
function getFirstSelector(selector){
  var result = document.querySelector(selector);

  return result;
}

function nestedTarget(){
  return document.querySelector('#nested .target');
}

function increaseRankBy(n) {
  var ranks = document.getElementById("app").querySelectorAll("ul.ranked-list li");

  for (var x = 0; x < ranks.length; x++) {
    ranks[x].innerHTML = parseInt(ranks[x].innerHTML) + n;
  }
}
// help
function deepestChild() {
  var divsNodeList = document.getElementById("grand-node").querySelectorAll("div");
  return divsNodeList[divsNodeList.length - 1];
}
