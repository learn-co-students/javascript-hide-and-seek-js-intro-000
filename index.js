function getFirstSelector(selector){
  return document.querySelector(selector)
}
function nestedTarget(){
  return document.querySelector("#nested").querySelector(".target")
}

function increaseRankBy(n){
  var arr=document.querySelectorAll(".ranked-list")
  for(let i=0; i<arr.length;i++){
    let list = arr[i].children
    for(let i=0;i<list.length;i++)
      list[i].innerHTML=parseInt(list[i].innerHTML)+n
  }

}
function deepestChild(){
  var depth =0
  var target = document.querySelector("#grand-node")
  var next = target

  //recursive deep search
  function dig(depth){
    depth++

  }

  //naive implementation
  while(Object.keys(next.firstChild).length>0){
    next=next.firstChild
  }
  return next

}
