function getFirstSelector(selector) {
  return document.querySelector(selector);
}

function nestedTarget() {
  return document.querySelector('#nested div.target')
}

function increaseRankBy(n) {
  let x = document.querySelectorAll('.ranked-list li');
  for (let i = 0, l = x.length; i < l; i++){
    x[i].innerHTML = (parseInt(x[i].innerHTML, 10) + n).toString();
  }
}

function deepestChild() {
  return document.querySelector('#grand-node div div div div');
}
