function getFirstSelector(selector) {
  return document.querySelector(selector)
}

function nestedTarget() {
  return document.querySelector('#nested .target')
}

function increaseRankBy(n) {
  var ranks = document.querySelectorAll('.ranked-list li')
  for (var i = 0; i < ranks.length; i++) {
    ranks[i].innerText = parseInt(ranks[i].innerText) + n
  }
}

function deepestChild() {
  // document.getElementById('grand-node').children[0].children[0].children[0].children[0].innerText
}
