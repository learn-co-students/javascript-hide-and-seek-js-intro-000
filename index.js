function getFirstSelector(selector) {
  return document.querySelector(selector);
}

function nestedTarget() {
  return document.querySelector('#nested').querySelector('.target');
}

function deepestChild() {
  return document.querySelector('#grand-node div div div div');
}

function increaseRankBy(n) {
  let rankedList = document.querySelectorAll('.ranked-list');

  for (let i = 0; i < rankedList.length; i++) {
    let children = rankedList[i].children;

    for (let j = 0; j < children.length; j++) {
      let rank = parseInt(children[j].innerHTML);
      rank += n;
      children[j].innerHTML = rank;
    }
  }
}
