function getFirstSelector(selector) {
  return document.querySelector(selector)
}

function nestedTarget() {
  return document.querySelector('#nested .target')
}

function increaseRankBy(n) {
  const rankedList = document.querySelectorAll('.ranked-list')

  for(var i = 0; i < rankedList.length; i++) {
    rankedList[i].innerHTML = parseInt(rankedList[i]) + n;
  }
}

function deepestChild() {
  var deepChild = document.querySelectorAll('div#grand-node')
  return deepChild[deepChild.length -1]
  }
