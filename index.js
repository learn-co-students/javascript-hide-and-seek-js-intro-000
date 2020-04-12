function getFirstSelector(selector){
  return document.querySelector(selector)
}

function nestedTarget(){
  return document.getElementById('nested').querySelector('div.target')
}

function deepestChild(){
  var deepest = document.getElementById('grand-node').querySelectorAll('div')
  return deepest[deepest.length-1];
}

function increaseRankBy(n){
  var list = document.getElementById('app').querySelectorAll('ul.ranked-list li')
  
  for (let i = 0; i < list.length; i++){
    list[i].innerHTML = parseInt(list[i].innerHTML) + n;
  }
}