function getFirstSelector(selector) {
  return document.querySelector(selector);
}

function nestedTarget() {
  return document.getElementById('nested').querySelector('.target');
}

function deepestChild() {
  const current = document.querySelectorAll('#grand-node div');
  while (current) {
    if (!current.firstElementChild) {
      return current[current.length - 1];
    }
    current;
  }
}

function increaseRankBy(n) {
  const number = document.querySelectorAll('ul.ranked-list li');
  for (let i = 0; i < number.length; i++) {
    number[i].innerHTML = parseInt(number[i].innerHTML) + n;
  }
}
