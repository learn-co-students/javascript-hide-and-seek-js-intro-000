function getFirstSelector(selector){
  return document.querySelector(selector);
}

function nestedTarget(){
  //return document.getElementById('nested').querySelector('target');
  return document.querySelector('#nested .target');
}

function increaseRankBy(n){
  var list = document.querySelectorAll('.ranked-list')
  for (var i = 0; i < list.length; i++){
    list[i].innerHTML = "" + (parseInt(list[i].innerHTML,10)+n);
  }
}

function deepestChild() {
  var current = document.querySelector('#grand-node');
  var next = null;
  
  while (current){
    next = current;
    current = current.querySelector('div');
  }

  return next;
}