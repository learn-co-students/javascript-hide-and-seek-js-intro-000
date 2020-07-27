function getFirstSelector (selector){
  return document.querySelector(selector)
}


function nestedTarget(){
  return document.querySelector('#nested .target');
}

function increaseRankBy(n){
     const ulList=document.querySelectorAll('ul.ranked-list li')
  for (let i=0; i<ulList.length; i++){
    ulList[i].innerHTML = (parseInt(ulList[i].innerHTML)+n).toString();
  }
}

function deepestChild(){
  return document.querySelector('#grand-node div div div div');
}