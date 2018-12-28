function getFirstSelector(selector){
  return document.querySelector(selector);

}

function nestedTarget(){
return document.querySelector('#nested .target');

}

function increaseRankBy(n){
const list = document.querySelectorAll('.ranked-list li');
for(let i=0;i<list.length;i++){
  list[i].innerHTML = parseInt(list[i].innerHTML)+n;
}
}


function deepestChild(){
var lis = document.getElementById('grand-node').querySelectorAll('div');
var mytest;
for(var i=0;i<lis.length-1;i++){
  mytest = lis[i].querySelector('div');
}
return mytest;

}
