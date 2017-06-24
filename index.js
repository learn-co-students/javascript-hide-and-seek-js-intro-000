function getFirstSelector(sel) {
  return (document.querySelector(sel));
}

function nestedTarget() {
  return (document.querySelector('#nested .target'));
}

function increaseRankBy(n) {
  const lis = document.getElementById('app').querySelectorAll('.ranked-list');
  for (let i = 0; i < lis.length; i++) {
    lis[i].innerHTML = (i + n).toString()
  }
}

function deepestChild() {
  var current = document.getElementById('app').querySelectorAll('#grand-node');
  var nodes = current[0].querySelectorAll('*');
  return nodes[nodes.length - 1];
}
