function getFirstSelector(selector) {
  return document.querySelector(selector)
}

function nestedTarget() {
  return document.querySelector('#nested').querySelector('.target')
}

function increaseRankBy(n) {
  for (var i = 0; i < document.querySelectorAll('.ranked-list li').length; i++) {
    var newRank = parseInt(document.querySelectorAll('.ranked-list li')[i].innerHTML, 10) + n
    document.querySelectorAll('.ranked-list li')[i].innerHTML = newRank
  }
}

function deepestChild() {
  var current = document.querySelector('#grand-node')
  while (current.querySelector('*') != null) {
    current = current.querySelector('*')
  }
  return current
}
