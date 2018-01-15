function getFirstSelector(selector){
  return document.querySelector(selector);
}

function nestedTarget() {
  return document.querySelector('#nested .target');
}

function deepestChild(){
  const list = document.getElementById('grand-node').querySelectorAll('*');
  return list[list.length -1];
}

function increaseRankBy(n){
let rankList = document.querySelectorAll('ul.ranked-list li');

  for(let i = 0; i < rankList.length; i++){
  let currVal = parseInt(rankList[i].innerHTML);
  currVal += n;
  rankList[i].innerHTML = currVal;
  }
}
