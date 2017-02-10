function getFirstSelector(selector){
  return document.querySelector(selector);
}

function nestedTarget(){
  return document.getElementById('nested').querySelector('div div');
}

function increaseRankBy(n){
  const ranks = document.querySelectorAll('ul.ranked-list li');
  for (let i = 0, l = ranks.length; i < l; i++){
    ranks[i].innerHTML = parseInt(ranks[i].innerHTML)+n;
  }
}

function deepestChild(){
return document.getElementById('grand-node').querySelector('div div div div');
}
