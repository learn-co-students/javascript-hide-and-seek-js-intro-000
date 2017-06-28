function getFirstSelector(s) {
  return document.querySelector(s)
}

function nestedTarget() {
  return document.querySelector('#nested .target')
}

function increaseRankBy(n) {
  const rankedLists = document.querySelectorAll('.ranked-list')

  for (let i = 0, l = rankedLists.length; i < l; i++) {
    let children = rankedLists[i].children

    for (let j = 0, k = children.length; j < k; j++) {
      children[j].innerHTML = parseInt(children[j].innerHTML) + n
    }
  }
}

function deepestChild() {
// let node = document.getElementById (use this id)
  let node = document.getElementById('grand-node')
// let nextnode = node.children[0]. node.children turns all these nodes into arrays which you
// can then select.
  let nextNode = node.children[0]
// while nextnode is not null
  while (nextNode) {
// set node = to next node, and next node = to *that* node's children
    node = nextNode
    nextNode = node.children[0]
  }
// return node
  return node
}
