
function getFirstSelector(selector) {
  return document.querySelector(selector)
}

function nestedTarget() {
  return document.getElementById('nested').getElementsByClassName('target')[0]
}

function increaseRankBy(n) {
  const elements = document.querySelectorAll('.ranked-list li')

  for (let i = 0; i < elements.length; i++) {
    elements[i].innerHTML = parseInt(elements[i].innerHTML) + n
  }
}

function deepestChild() {
  let node = document.querySelector('div#grand-node')

  while (node.children.length) {
    node = node.children[0]
  }

  return node
}
