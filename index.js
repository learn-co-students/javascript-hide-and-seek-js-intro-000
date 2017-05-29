function getFirstSelector(selector){
  var firstElement = document.querySelector(selector);
  return firstElement;
}
getFirstSelector('div'); 

function nestedTarget(){
  var target = document.querySelector('#nested .target');
  return target;
}
nestedTarget();

function increaseRankBy(n){
  const list = document.querySelectorAll('.ranked-list');
  for(var i = 0; i < list.length; i++){
    list[i].innerHTML = parseInt(list[i].innerHTML) + n;
  }
  return list;
}
increaseRankBy(3);

function deepestChild(){
  var deepest = document.querySelector('#grand-node div div div div');
  return deepest;
}
deepestChild();
