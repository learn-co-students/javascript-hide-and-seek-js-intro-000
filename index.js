function getFirstSelector(selector){
  var l = document.querySelector(selector)
  return l
}

function nestedTarget() {
  var c = document.getElementById(`nested`).querySelector(`div div div`)
  return c
}

function increaseRankBy(n) {
  const lis = document.getElementById('app').querySelectorAll('ul.ranked-list li')
  for (let i = 0; i < lis.length; i++) {
  lis[i].innerHTML = (parseInt(lis[i].innerHTML) + n)
  }
}

function deepestChild() {
  var node = document.getElementById(`grand-node`)
  var childnode = node.children[0]
  while (childnode !== undefined ){
    node = childnode
    childnode = node.children[0]
  }
  return node

}
