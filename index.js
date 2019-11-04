function getFirstSelector(selector) {
  const first = document.querySelector(selector);
  return first;
}

function nestedTarget() {
  const nested = document.querySelector('#nested div.target');
  return nested;
}

function increaseRankBy(n) {
  const rankedList = document.getElementById('app').querySelectorAll('ul.ranked-list li');
  for (let i = 0; i < rankedList.length; i++) {
    rankedList[i].innerHTML = parseInt(rankedList[i].innerHTML) + n;
  }
}

function deepestChild() {
  const deep = document.querySelector('div#grand-node div div div div');
  return deep;
}