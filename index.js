function getFirstSelector(selector) {
  return document.querySelector([selector])
}

function nestedTarget() {
  return document.getElementById('nested').querySelector('div.target')
}

function increaseRankBy(n) {
  var list = document.querySelectorAll('ul.ranked-list')
  for (var i = 0; i < list.length; i++) {
      list[i].innerHTML = parseInt(list[i] + n)
  }
}

function deepestChild(){

  var nodeList = document.getElementById('grand-node').querySelectorAll('div')
  var current = []
  for (let i = 0; i < nodeList.length; i++) {
    current.push(nodeList[i])
  }

return current[current.length-1]

}
