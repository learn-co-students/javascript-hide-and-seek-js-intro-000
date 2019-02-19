function getFirstSelector(selector){
  return document.querySelector(selector);
}

function nestedTarget(){
  return document.querySelector('#nested .target')
}

function increaseRankBy(n){
  var array=document.querySelectorAll("ul.ranked-list")
  for (var i=0;i<array.length;i++){
    array[i].innerHTML=parseInt(array[i].innerHTML)+n;
  }
}

function deepestChild(){
  return document.querySelector('#grand-node div div div div');
}
