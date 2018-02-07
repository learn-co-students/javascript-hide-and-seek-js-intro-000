function getFirstSelector(selector) {
  const lis = document.getElementById('app').querySelectorAll(selector);
  return lis[0];
}

funciton nestedTarget() {
  return document.querySelector('div');
}

function increaseRankBy(n) {
  const lis = document.getElementById('app').querySelectorAll('.ranked-list');
  for (let i = 0; i < lis.length; i++) {
    list[i].innerHTML = parseInt(list[i].innerHTML) + 1;
  }
}

function deepestChild() {
  var nodes = document.querySelectorAll('#grand-node div');
  var mostDeep = nodes[nodes.length - 1];
  return mostDeep;
}
