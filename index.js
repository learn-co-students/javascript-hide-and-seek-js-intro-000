function getFirstSelector(selector) {
  return document.querySelector(selector);
}

function nestedTarget() {
  return document.querySelector('#nested .target')
}

function increaseRankBy(n) {
    const rankedList = document.querySelectorAll('.ranked-list');
    for (let i = 0, l = rankedList.length; i < l; i++) {
      rankedList[i].innerHTML = (i + n).toString();
    }
}

function deepestChild() {
  return document.querySelector('#grand-node div div div div');
}
