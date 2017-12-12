function getFirstSelector(m) {
  return document.querySelector(m)
}

function nestedTarget() {
  return document.querySelector('#nested .target')
}

function increaseRankBy(n) {
  const lists = document.querySelectorAll('.ranked-list')

  for (let i = 0; i < lists.length; i++) {
    let rankables = lists[i].children

    for (let j = 0, k = rankables.length; j < k; j++) {
      rankables[j].innerHTML = parseInt(rankables[j].innerHTML) + n
    }
  }
}

function deepestChild() {
  let topNode = document.getElementById('grand-node')
  let subNode = topNode.children[0]

  while (subNode) {
    topNode = subNode
    subNode = topNode.children[0]
  }

  return topNode
}