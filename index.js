function getFirstSelector(selector) {
  return document.querySelector(selector)
}

function nestedTarget() {
  return document.querySelector('#nested div div div .target')
}

function increaseRankBy(n) {
  var lis = document.querySelectorAll('ul.ranked-list li')

  for (let i = 0; i < lis.length; i++) {
  lis[i].innerHTML = parseInt(lis[i].innerHTML) + n
}
}

function deepestChild() {
  var node = document.querySelector('#grand-node div div div div')
  return node
}
