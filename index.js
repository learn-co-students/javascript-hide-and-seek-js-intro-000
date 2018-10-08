function getFirstSelector(selector){
  return document.querySelector(selector)
}

function nestedTarget(){
  return document.querySelector('#nested .target')
}

function increaseRankBy(n){
  var rankedLists = document.querySelectorAll('.ranked-list')
  var currentList
  for (var i = 0; i < rankedLists.length; i++){
    currentList = rankedLists[i]
    for (var j = 0; j < currentList.children.length; j++){
      let currentNum = currentList.children[j]
      currentNum.innerHTML = parseInt(currentNum.innerHTML) + n
    }
  }
}

function deepestChild(){
  var grandNode = document.querySelector(`#grand-node`)
  var nextUp = grandNode.querySelector('div')

  while (nextUp.querySelector('div')){
    nextUp = nextUp.querySelector('div')
  }
  return nextUp
}
