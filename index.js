function getFirstSelector(selector){
  return document.querySelector(selector)
}

function nestedTarget(){
  return document.getElementById('nested').querySelector('div.target')
}

function increaseRankBy(n){
  let list = document
    .querySelectorAll('ul.ranked-list li')

  for (let i = 0; i < list.length; i++){
    list[i].innerHTML = parseInt(list[i].innerHTML) + n
  }
}

function deepestChild(){
  let grandNode = document.getElementById('grand-node')
  return grandNode.querySelectorAll("div")[3]
}



























// function getFirstSelector(selector){
//   return document.querySelectorAll(selector)[0]
// }
//
// function nestedTarget(){
//   return document.getElementById("nested").getElementsByTagName('div')[3]
// }
//
// function increaseRankBy(n){
//   const lis = document
//   .getElementById("app")
//   .querySelectorAll("ul.ranked-list li")
//
//   for (var i = 0 ; i < lis.length ; i++){
//     lis[i].innerHTML = parseInt(lis[i].innerHTML) + n
//   }
// }
//
// function deepestChild(){
//
// return document.getElementById("grand-node").querySelectorAll("div")[3]
//   }
