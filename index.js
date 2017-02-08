function getFirstSelector(selector) {
  return document.querySelector(selector) }

function nestedTarget() {
  return document.querySelector('#nested .target')
}

function increaseRankBy(n) {
  var rankList = document.querySelectorAll('.ranked-list')
  for (let i = 0, l = rankList.length; i < l; i++){
    let children = rankList[i].children

  for (let j = 0, k = children.length; j < k; j++) {
      children[j].innerHTML = parseInt(children[j].innerHTML) + n
  }}}

function deepestChild() {
  let node = document.getElementById('grand-node')
  let nextNode = node.children[0]
  while(nextNode) {
    node = nextNode
    nextNode = node.children[0]}
  return node
}
