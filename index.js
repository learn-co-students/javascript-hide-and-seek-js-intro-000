function getFirstSelector(selector){
  return document.querySelector(selector);
}

function nestedTarget(){
  return document.getElementById('nested').querySelector('.target');
}

function increaseRankBy(n){
  var lis = document.getElementById('app').querySelectorAll('ul.ranked-list li');
  for (let i = 0, l = lis.length; i < l; i++){
    lis[i].innerHTML = parseInt(lis[i].innerHTML) + n;
  }
}

function deepestChild(){
  var target;
  target = document.getElementById('grand-node');
  while(target.querySelector('div')){
    target = target.querySelector('div');
  }
  return target;
}
