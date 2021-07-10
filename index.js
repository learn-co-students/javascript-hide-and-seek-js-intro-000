function getFirstSelector(selector) {
  return document.querySelector(selector);
}

function nestedTarget() {
  return document.querySelector('#nested .target');
}

function increaseRankBy(n) {
  let list = document.querySelectorAll('ul.ranked-list li');
  
  for(let i = 0; i < list.length; i++) {
    let innerList = parseInt(list[i].innerHTML, 10);
    list[i].innerHTML = (innerList + n).toString();
  }
}

function deepestChild() {
  let children = document.querySelectorAll('div#grand-node div');
  return children[children.length - 1];
}