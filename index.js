// document.querySelectorAll('ul.ranked-list li ul')
function getFirstSelector(selector){
  return document.querySelector(selector)
}

function nestedTarget(){
  return document.querySelector('#nested .target')
}

function deepestChild(){
  let grandNode = document.querySelector('#grand-node')
  // let tag = grandNode.children[0].tagName
  let childNode = grandNode.children
  let i = 0;

  while (childNode.length > 0){
      node = childNode
      childNode = node[i].children
    }
    return childNode.innerHTML
}

function increaseRankBy(n){
  let rankedLists = document.querySelectorAll('.ranked-list')
  return rankedLists.forEach(function(list){
    return list.innerHTML = parseInt(list.innerHTML)+n
  })
}

function greeting(phrase){
  console.log(phrase)
}
