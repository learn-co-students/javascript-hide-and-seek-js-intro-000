function getFirstSelector(selector) {
  return document.querySelector(selector);
}

function nestedTarget() {
  return document.getElementById('nested').querySelector('.target');
}

function increaseRankBy(n) {
  let lis = document.querySelectorAll('.ranked-list li');
  for (let li of lis) {
    li.innerHTML = parseInt(li.innerHTML) + n;
  }
}

function deepestChild() {
  let root = document.getElementById('grand-node');
  let children = root.querySelectorAll('div');

  return children[children.length - 1];
}
