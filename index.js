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
  const tree = document.querySelectorAll('div#grand-node div');
  return tree[tree.length - 1]
}
