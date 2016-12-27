function getFirstSelector(selector) {
  return document.querySelector(selector)
}

function nestedTarget() {
  return document.querySelector('#nested .target')
}

function increaseRankBy(n) {
  var eles = document.querySelectorAll('ul.ranked-list li')
  for (let i = 0; i < eles.length; i++) {
    eles[i].innerHTML = parseInt(eles[i].innerHTML) + n
  }
}

function deepestChild() {
  var current = document.querySelector('div#grand-node').children
  while (current.length > 1) {
    let next = []
    for (let i = 0; i < current.length; i++) {
      next.push(current[i].children)
    }
    current = next
  }
  return current[0]
}
