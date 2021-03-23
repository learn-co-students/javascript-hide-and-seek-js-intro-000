function getFirstSelector(s){
  return document.querySelector(s);
}

function nestedTarget(){
  return document.querySelector("#nested .target");
}

 function increaseRankBy(n){
   const list = document.querySelectorAll('.ranked-list');
   for(let i = 0; i < list.length; i++){
     for(let k = 0; k < list[i].children.length; k++){
       list[i].children[k].innerHTML = parseInt(list[i].children[k].innerHTML)+n;
     }
   }
 }

function deepestChild(){
  var list = document.querySelector('#grand-node');
  while(true){
    if(list.children[0]){
      list = list.children[0];
    }else{
      return list;
    }
  }
}
