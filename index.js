function getFirstSelector(selector) {
  return document.querySelector(selector)
}

function nestedTarget() {
  return document.querySelector('#nested .target')
}

function increaseRankBy(n) {
  var rankedListItems = document.querySelectorAll('.ranked-list li')
//  var rankedListItems =
  for (let i = 0; i < rankedListItems.length; i++) {
    let num = parseInt(rankedListItems[i].textContent,10)
    rankedListItems[i].textContent = num + n
//    for (let i2 = 0; i2 < rankedLists[i1].length; i2+++) { }
  }
}

function deepestChild() {
  var v = document.querySelector('div#grand-node')
//  var v = grandNode
  var nestedNode
  function returnChild(node) {
    return node.children[0]
  }
/*  for (let v = grandNode; v === undefined; v = returnChild(v)) {
    nestedNode = v
  } */
    while (v != undefined) {
      nestedNode = v
      v = returnChild(nestedNode)
    }
  return nestedNode
}
