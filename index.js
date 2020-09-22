
function getFirstSelector(selector) {
  return document.querySelector(selector)
}

function nestedTarget() {
  return document.getElementById('nested').querySelector('.target')
}

function increaseRankBy(n) {
  const rankedLists = document.querySelectorAll('.ranked-list')
  const firstList = rankedLists[0]
  const secondList = rankedLists[1]
  let children = firstList.children
  let start = 1
  for (let i = 0; i < children.length; i++) {
    children[i].innerHTML = start + i + n
  }

  children = secondList.children
  start = 12
  for (let i = 0; i < children.length; i++) {
    children[i].innerHTML = start - i + n
  }
}

function deepestChild() {
  var grandNode = document.getElementById('grand-node')
  let i = 0
  while (grandNode.firstElementChild) {
    i++
    grandNode = grandNode.firstElementChild
  } return grandNode
}
