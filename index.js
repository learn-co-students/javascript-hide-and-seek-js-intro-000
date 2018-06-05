function getFirstSelector(selector) {
  return document.querySelector(selector);
}

function nestedTarget() {
  return document.querySelector('div.target');
}

function deepestChild() {
  const divs = document.querySelectorAll('div#grand-node div');
  return divs[divs.length - 1];
}

function increaseRankBy(n) {
  const list = document.querySelectorAll('ul.ranked-list li');
  for (let i = 0; i < list.length; i += 1) {
    const newNumber = parseInt(list[i].innerHTML, 10) + n;
    list[i].innerHTML = newNumber;
  }
}