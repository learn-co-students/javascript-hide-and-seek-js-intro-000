function getFirstSelector(selector) {
  return document.querySelector(selector)
}

function nestedTarget() {
  return document.querySelector('#nested .target')
}

function deepestChild() {
  let grandNode = document.getElementById('grand-node')
  let nodeChild = grandNode.children[0]

  while (nodeChild) {
    grandNode = nodeChild
    nodeChild = grandNode.children[0]
  }
  return grandNode
}

function increaseRankBy(n) {
  const rankedLists = document.querySelectorAll('.ranked-list')

  for (let i = 0; i < rankedLists.length; i++) {
    let children = rankedLists[i].children

    for (let j = 0; j < children.length; j++) {
      children[j].innerHTML = parseInt(children[j].innerHTML) + n
    }
  }
}
