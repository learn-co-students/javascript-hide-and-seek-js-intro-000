function getFirstSelector(selector) {
  return document.querySelector(selector);
}
function nestedTarget() {
  return document.querySelector('#nested .target');
}
function increaseRankBy(n) {
  let ranks = document.querySelectorAll('ul.ranked-list li');
  for(let i=0;i<ranks.length;++i) {
    let rank = parseInt(ranks[i].innerHTML);
    ranks[i].innerHTML = `${rank+n}`;
  }
}
function deepestChild() {
  let deepest = document.querySelector('div#grand-node');
  let prev_deepest = deepest;
  while (deepest!==undefined) {
    prev_deepest = deepest;
    deepest = deepest.children[0];
  }
  return prev_deepest;
}
