function getFirstSelector(selector){
  var target = document.querySelector(selector);
  return target
}

function nestedTarget(){
  return document.getElementById('nested').querySelector('.target')
}

function increaseRankBy(n){
  var lis = document.querySelectorAll('ul.ranked-list')
  for (var idx = 0; idx < lis.length; idx++){
    lis[idx].innerHTML = lis[idx] + n ;
  }
}

function deepestChild(){
  var nodes = document.getElementById('grand-node').querySelectorAll('div');
  var deepestElem = nodes[nodes.length - 1];
  return deepestElem
}
