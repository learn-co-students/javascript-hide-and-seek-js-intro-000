function getFirstSelector(selector) {
    return document.querySelector(selector);
}

function nestedTarget() {
  return document.querySelector(`#nested .target`);
}

function increaseRankBy(n) {
  var rank;
  var track = [];
  const nodelist = document.getElementById('app').querySelectorAll('ul.ranked-list li');
  for (let i = 0; i < nodelist.length; i++) {
    rank = parseInt(nodelist[i].innerHTML)
    nodelist[i].innerHTML = (rank + n).toString();
  }
}

function deepestChild() {
  return document.getElementById('grand-node').querySelectorAll('div')[3]
}
