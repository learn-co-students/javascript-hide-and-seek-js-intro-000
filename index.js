function getFirstSelector(selector) {
  return document.querySelector(selector);
}

function nestedTarget() {
  return document.querySelector("#nested .target");
}

function increaseRankBy(n) {
  let ranks = document.querySelectorAll("ul.ranked-list li");

  for(let i = 0; i < ranks.length; i++) {
    ranks[i].innerHTML = parseInt(ranks[i].innerHTML) + n;
  }
}

function deepestChild() {
  let parent = document.querySelector("div#grand-node");

  while(parent.childNodes.length > 1) {
    parent = parent.childNodes[1];
  }

  return parent;

}
