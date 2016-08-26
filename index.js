function getFirstSelector(selector) {
  return document.querySelector(selector)
}

function nestedTarget() {
  return document.querySelector('#nested .target')
}

function increaseRankBy(n) {
  const rankedLists = document.querySelectorAll('.ranked-list');
  for (let i = 0; i < rankedLists.length; i++) {
    rankedLists[i].innerHTML = (parseInt(rankedLists[i].innerHTML, 10) + n).toString()
    }
  return rankedLists
}

function deepestChild() {
  var deeper = 1;
  var returns = 'div#grand-node';
  var deeply = 'grand-node ';
  var final;
  const tree = document.querySelectorAll(returns);
  for (let i = 0; i < tree.length; i++) {
    if (querySelectorAll(tree[i]).length > deeper) {
      deeper = tree.length;
      final = deeply + document.querySelectorAll(tree[i])
    }
  }
  return deeper
}
