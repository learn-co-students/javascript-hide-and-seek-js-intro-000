function getFirstSelector(selector) {
  return document.querySelector(selector);
}

function nestedTarget(element) {
  return document.querySelector("#nested .target");
}

function increaseRankBy(n) {
  const increase = document.getElementById('app').querySelectorAll('ul.ranked-list li');

  for (let i = 0; i < increase.length; i++) {
    increase[i].innerHTML = (parseInt(increase[i].innerHTML) + 3).toString();
  }
}

function deepestChild() {
  return document.getElementById('grand-node').querySelector('div div div div div');
}
