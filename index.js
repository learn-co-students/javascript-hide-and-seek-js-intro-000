function getFirstSelector(selector) {
  return document.querySelector(selector)
}

function nestedTarget() {
  return document.getElementById('nested').querySelector('.target')
}

function increaseRankBy(n) {
  const allRankedLists = document.querySelectorAll('.ranked-list')
  const increasingList = allRankedLists[0]
  const decreasingList = allRankedLists[1]

  let children = increasingList.children
  let start = parseInt(children[0].innerHTML,10)
  for (let i = 0, l = children.length; i < l; i++) {
    children[i].innerHTML = (start + i + n).toString()
  }
  children = decreasingList.children
  start = parseInt(children[0].innerHTML,10)

  for (let i = 0, l = children.length; i < l; i++) {
    children[i].innerHTML = (start - i + n).toString()
  }
}

function deepestChild() {
  const wholeTree= document.getElementById('grand-node')
  const myNodeList = wholeTree.querySelectorAll('div')
  return myNodeList[myNodeList.length-1]
}
