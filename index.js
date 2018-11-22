function getFirstSelector(selector){
  return document.querySelector(selector)
}

function nestedTarget(){
  return document.querySelector('#nested .target')
}

function increaseRankBy(n){
   const rankedLists=document.querySelectorAll('.ranked-list')

  for (var i = 0; i < rankedLists.length; i++) {
    var next= rankedLists[i].children
    for (var v = 0; v<next.length; v++){
      next[v].innerHTML=parseInt(next[v].innerHTML)+n
    }
  }
}

function deepestChild(){
  var curr=document.getElementById('grand-node')
  var next = curr.children[0]
  while(next){
    curr=next
    next=curr.children[0]
  }
  return curr
}
