function getFirstSelector(selector) {
  return document.querySelector(selector)
}

function nestedTarget() {
  return document.getElementById('nested').querySelector('.target')
}

function increaseRankBy(n) {
  var ranks = document.querySelectorAll('.ranked-list li')
  for (var i = 0; i < ranks.length; i++) {
    ranks[i].innerText = parseInt(ranks[i].innerText) + n
  }
}

function deepestChild() {

}
