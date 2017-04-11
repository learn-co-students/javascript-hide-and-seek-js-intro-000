function getFirstSelector(selector) {
  return document.querySelector(selector)
}

function nestedTarget() {
  return document.getElementById('nested').querySelector('.target')
}

function increaseRankBy(n) {
  const x = document.querySelectorAll('.ranked-list')

  for (let i = 0; i < x.length; i++) {
    x[i].innerHTML = parseInt(i + n).toString()
  }
}

function deepestChild() {
  const y = document.getElementById('grand-node').querySelectorAll('div')
  return y[y.length - 1]
}
//comment
