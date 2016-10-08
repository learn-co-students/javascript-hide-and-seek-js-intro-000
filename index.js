function getFirstSelector(x) {
  return document.querySelector(x)
}

function nestedTarget(){
  return document.querySelector('#nested .target')
}

function increaseRankBy(n) {
  const rankedLists = document.querySelectorAll('.ranked-list')

  for (let t = 0, u = rankedLists.length; t < u; t++) {
    let children = rankedLists[t].children

    for (let y = 0, z = children.length; y < z; y++) {
      children[y].innerHTML = parseInt(children[y].innerHTML) + n
    }
  }
}

function deepestChild() {
  let node = document.getElementById('grand-node')
  let nextNode = node.children[0]

  while (nextNode) {
    node = nextNode
    nextNode = node.children[0]
  }
  return node
}
