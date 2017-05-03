function getFirstSelector(selector) {
  return document.querySelector(selector)
}

function nestedTarget() {
  return document.querySelector('#nested .target')
}

function increaseRankBy(n) {
  var rankedListElements = document.querySelectorAll('ul.ranked-list li')
  rankedListElements.forEach(element => {
    var rank = parseInt(element.innerHTML, 10)
    rank += n
    element.innerHTML = `${rank}`
  })
}

function deepestChild() {
  let startNode = document.querySelector('#grand-node')
  let nextNode = startNode.children[0]

  while (nextNode) {
    var node = nextNode
    nextNode = node.children[0]
  }

  return node
}