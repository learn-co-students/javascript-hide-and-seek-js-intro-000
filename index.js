function getFirstSelector(selector) {
  if (typeof selector !== 'string') {
    return null;
  }
  return document.querySelector(selector);
}

function nestedTarget() {
  return document.querySelector('#nested .target');
}

function increaseRankBy(n) {
  const rankedList = document.querySelectorAll('ul.ranked-list');
  for (let list of rankedList) {
    for (let listItem of list.querySelectorAll('li')) {
      listItem.innerHTML = parseInt(listItem.innerHTML) + n;
    }
  }
}

function deepestChild() {
  const grandNode = document.querySelector('#grand-node');
  for (let next = grandNode; next !== null; next = next.querySelector('div')) {
    if (next.querySelector('div') === null) {
      return next;
    }
  }
}