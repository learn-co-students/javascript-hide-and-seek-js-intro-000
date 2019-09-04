function getFirstSelector(selector) {
  return document.querySelector(selector)
}


function nestedTarget() {
  var nested = document.getElementById('nested')
  return nested.querySelector('.target')
}

function increaseRankBy (n) {
  var rankList = document.querySelectorAll('ul.ranked-list li')

  for (let i = 0; i < rankList.length; i++) {
    rankList[i].innerHTML = (parseInt(rankList[i].innerHTML) + n)

  }
}

/*
var rankedList = document.querySelectorAll('.ranked-list')
console.log(document.querySelectorAll('.ranked-list'))
console.log(document.querySelectorAll('ul.ranked-list li'))
*/

function deepestChild () {
  var divList = document.querySelectorAll('#grand-node')[0].querySelectorAll('div')
  return divList[3]
}

console.log(document.querySelectorAll('#grand-node')[0].querySelectorAll('div'))
