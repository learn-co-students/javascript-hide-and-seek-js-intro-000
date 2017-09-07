function getFirstSelector(selector) {
  return document.querySelector(selector);
}

function nestedTarget() {
  var curr = document.getElementById('nested');
  while (curr) {
    if (curr.className === 'target') {
      return curr;
    }
    curr = curr.children[0];
  }
}

function deepestChild() {
  var curr = document.getElementById('grand-node');
  var lis = curr.querySelectorAll('div');
  return lis[lis.length - 1];
}

function increaseRankBy(n) {
  var val = null;
  var lis = document.querySelectorAll('.ranked-list li');
  for (var i = 0; i < lis.length; i++) {
    lis[i].innerHTML = (parseInt(lis[i].innerHTML, 10) + n).toString();
  }
}
