function getFirstSelector(selector) {
  return document.querySelector(selector);
}

function nestedTarget() {
  return document.getElementById('nested').querySelector('.target'); // no need to do: div.target
}

function increaseRankBy(n) {
  var temp = document.querySelectorAll('.ranked-list li');
  for (let i = 0; i < temp.length; i++) {
    temp[i].innerHTML = parseInt(temp[i].innerHTML) + n
  }
}

function deepestChild() {
  var deep = document.querySelectorAll('#grand-node div')
  return deep[deep.length - 1];
}
