function getFirstSelector(selector) {
return document.querySelector(selector)
}

function nestedTarget() {
return document.getElementById('nested').querySelector('div.target');
}

function increaseRankBy(n) {
var rankedlist = document.getElementById("app").querySelectorAll("ul.ranked-list")
for (let i = 0; i < rankedlist.length; i++) {
  rankedlist[i].innerHTML = (i + n).toString();
}
return rankedlist
}

function deepestChild() {
var child = document.getElementById("grand-node").querySelectorAll("div").length;
return document.getElementById("grand-node").querySelectorAll("div")[child - 1];
}
