function getFirstSelector(selector){
  return document.querySelector(selector)
}

function nestedTarget(){
  return document.querySelector('#nested .target')
}

function increaseRankBy(n){
  var rankedLists = document.querySelectorAll('.ranked-list')

  for (var i = 0; i < rankedLists.length; i++) {
    var listItems = rankedLists[i].children
    for (var j = 0; j < listItems.length; j++) {
      listItems[j].innerHTML = parseInt(listItems[j].innerHTML) + n
    }
  }
}

function deepestChild() {
  let parrentNode = document.getElementById('grand-node')
  let node = parrentNode.children[0]

  while (node) {
    parrentNode = node
    node = parrentNode.children[0]
  }

  return parrentNode
}
