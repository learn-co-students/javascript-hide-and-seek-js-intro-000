function getFirstSelector(selector) {
  return document.querySelector(selector)
}

function nestedTarget() {
  return document.querySelector('#nested .target')
}

function increaseRankBy(n) {
  let ranksToInc = document.querySelectorAll(".ranked-list li")
  for(let i = 0; i < ranksToInc.length; i++) {
    ranksToInc[i].innerHTML = parseInt(ranksToInc[i].innerHTML) + n
  }
}

function deepestChild() {
  let currentNode = document.querySelector('#grand-node')
  while(currentNode.querySelector('div')) {
    currentNode = currentNode.querySelector('div')
  }
  return currentNode
}
