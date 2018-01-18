function getFirstSelector(selector) {
    return document.querySelector(selector);
}

function nestedTarget() {
    return document.querySelector('#nested .target')
}

function increaseRankBy(n) {
    const el = document.getElementById('app').querySelectorAll('ul.ranked-list li')

    for (var i = 0; i < el.length; i++) {
        el[i].innerHTML = (parseInt(el[i].innerHTML) + n).toString()
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