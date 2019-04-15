function getFirstSelector(selector) {
  return document.querySelector(selector)
}

function nestedTarget() {
  return document.querySelector('#nested .target')
}

function increaseRankBy(n) {
  const rankedList = document.querySelectorAll('.ranked-list')
    for (let i = 0; i < rankedList.length ; i++) {
    rankedList[i].innerHTML = parseInt(rankedList[i].innerHTML) + n
  }
}

function deepestChild() {
  return document.querySelector('div#grand-node div div div div')
}
