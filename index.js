var getFirstSelector = (selector) => {
  return document.querySelector(selector)
}

var nestedTarget = () => {
  return document.querySelector('.target')
}

var increaseRankBy = (n) => {
  const lis = document.getElementById('app').querySelectorAll('ul.ranked-list li')
    for (let i = 0, l = lis.length; i < l; i++) {
      lis[i].innerHTML = (parseInt(lis[i].innerHTML) + n)
    }
}

var deepestChild = () => {
  let node = document.getElementById('grand-node')
  let nextNode = node.children[0]
  while (nextNode) {
    node = nextNode
    nextNode = node.children[0]
  }
  return node
}
