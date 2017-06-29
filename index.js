function getFirstSelector(selector){
  return document.querySelector(selector)
}

function nestedTarget(){
  return document.querySelector('#nested .target')
}
function increaseRankBy(n){
  const rankedItems = document.querySelectorAll('.ranked-list')
  const firstList = rankedItems[0]
  const secondList = rankedItems[1]

  let children = firstList.children
  let start = 1
  for (var i = 0; i < children.length; i++) {
    // console.log(children[i].innerHTML)
    children[i].innerHTML = (start + i + n)
  }

  children = secondList.children
  start = 12

  for (var i = 0; i < children.length; i++) {
    // console.log(children[i].innerHTML)
    children[i].innerHTML = (start - i + n)
  }
}

function deepestChild(){
    return document.querySelector('#grand-node div div div div')
  //  return dive.innerHTML.toString()
}
