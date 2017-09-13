function getFirstSelector(selector) {
  return document.querySelector(selector);
}

function nestedTarget() {
  return document.querySelector('#nested .target');
}

function increaseRankBy(n) {
  const rankedLis = document.querySelectorAll('ul.ranked-list')

  for (let i = 0; i < rankedLis.length; i++) {
    var jeff = rankedLis[i].children

  for (let j = 0; j < jeff.length; j++) {
    jeff[j].innerHTML = parseInt(jeff[j].innerHTML) + n
    }
  }
}

function deepestChild() {
  var parent = document.getElementById('grand-node')
  var child = parent.children[0]

  while (child) {
    parent = child
    child = parent.children[0]
  }
  return parent
}
