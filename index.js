function getFirstSelector(selector) {
  return document.querySelector(selector);
}

function nestedTarget() {
  return document.querySelector('div#nested div.target');
}

function increaseRankBy(n) {
  let rank = document.querySelectorAll('.ranked-list li');
  rank.forEach((node) => {
    node.innerHTML = parseInt(node.innerHTML) +n;
  });
}

function deepestChild() {
return document.querySelector('#grand-node div div div div');
  }
