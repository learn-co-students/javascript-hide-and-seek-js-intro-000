function getFirstSelector(selector) {
  return document.querySelector(selector)
}

function nestedTarget() {
  return document.querySelector('#nested .target')
}

function increaseRankBy(n) {
  const list = document.getElementById('app').querySelectorAll('.ranked-list')

  for (let i = 0; i < list.length; i++) {
    list[i].innerHTML = (i + n).toString()
  }
}

function deepestChild() {
  return document.querySelector(`div#grand-node`)
}
