function getFirstSelector(selector){
   return document.querySelector(selector)

}
function nestedTarget(){
  return document.querySelector('#nested .target')
}
function deepestChild(){
  var x= document.querySelector('#grand-node')
  x=x.getElementsByTagName('div')
  return x[x.length-1]
}
function increaseRankBy(n){
  var list=document.querySelectorAll('.ranked-list')
  var first= list[0]
  var second= list[1]
  var children = first.children
  for(var i=0;i<children.length;i++){
    children[i].innerHTML=parseInt(children[i].innerHTML)+n
  }
  children=second.children
  for(var i=0;i<children.length;i++){
    children[i].innerHTML=parseInt(children[i].innerHTML)+n
  }
}
