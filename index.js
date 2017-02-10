function getFirstSelector(selector) {
  return document.querySelector(selector)
}

function nestedTarget() {
  return document.querySelector('#nested .target')
}

function increaseRankBy(n) {
  const rankedLists = document.querySelectorAll('.ranked-list')

  for (let i = 0, lists = rankedLists.length; i < lists; i++) {
    let rankedChildren = rankedLists[i].children

    for (let j = 0, liChild = rankedChildren.length; j < liChild; j++) {
      rankedChildren[j].innerHTML = parseInt(rankedChildren[j].innerHTML) + n
    }
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
