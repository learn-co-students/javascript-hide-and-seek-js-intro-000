function getFirstSelector(selector) {
  return document.querySelector(selector);
}

function nestedTarget() {
  return document.getElementById('nested').querySelector('div .target');
}

function increaseRankBy(n) {
  const ranks = document.getElementById('app').querySelectorAll('.ranked-list li');

  for (let i = 0; i < ranks.length; i++) {
    let upranked = parseInt(ranks[i].innerHTML) + n;
    ranks[i].innerHTML = upranked.toString();
  }
}

function deepestChild() {

  const el = document.getElementById('grand-node').querySelectorAll('div');

  for (let i = 0; i < el.length; i++) {
    if (!el[i].querySelector('div')) {return el[i]}
  }
}
