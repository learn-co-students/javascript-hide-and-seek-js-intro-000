function getFirstSelector(selector){
  return document.querySelector(selector)
}
function nestedTarget(){
  return document.getElementById("nested")
}
function deepestChild(){
  const grandnode = document.getElementById("grand-node")
  return grandnode.querySelector('div div div div div')
}
function increaseRankBy(n){
  const lis = document.querySelectorAll('ul.ranked-list li')
  for (let i = 0; i < lis.length; i++){
    var a = Number(lis[i].innerHTML)
    lis[i].innerHTML = (a + n).toString()
  }
}
