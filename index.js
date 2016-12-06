function getFirstSelector(selector) {
return document.querySelector(selector)
}
function nestedTarget() {
return document.querySelector('#nested .target')
}
function increaseRankBy(n) {
  const fr = document.getElementById('app').querySelectorAll('ul.ranked-list li')
  for (var i = 0; i < fr.length; i++) {
    fr[i].innerHTML = (parseInt(fr[i].innerHTML,10) + n)
  }
}
function deepestChild() {
  let current = document.getElementById('grand-node')
  let next = current.children[0]

  while (next) {
    current = next
    next = current.children[0]
  }

  return current
}
