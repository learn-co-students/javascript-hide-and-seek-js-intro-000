
function getFirstSelector(selector){
  return document.querySelector(selector)
}

function nestedTarget(){
return document.querySelector('#nested .target')
}

function increaseRankBy(n){
  const lis = document.querySelectorAll('ul.ranked-list li');
  for (let i = 0; i < lis.length; i++) {
    lis[i].innerHTML = (parseInt(lis[i].innerHTML) + n).toString()  }
}

function deepestChild(){
  const list = document.querySelector('#grand-node').querySelectorAll('div');
  //for (let i = 0; i <list.length; i++){
  return list[list.length-1];
  }
