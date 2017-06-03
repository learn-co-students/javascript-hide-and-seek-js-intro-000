function getFirstSelector(selector){
  return document.querySelector(selector)
}

function nestedTarget(){
  return document.querySelector('#nested .target')
}

function increaseRankBy(n){
  const lis = document.querySelectorAll('.ranked-list')

  for(var i=0;i < lis.length;i++){
    var children = lis[i].children

    for(var j=0; j<children.length;j++){
      children[j].innerHTML=parseInt(children[j].innerHTML)+n
    }
  }
}

function deepestChild(){
  var target=document.getElementById('grand-node')
  var nextTarget = target.children[0]
  

  while(nextTarget){
    target=nextTarget
    nextTarget=target.children[0]
  }

  return target
}