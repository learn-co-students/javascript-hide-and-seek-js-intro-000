function getFirstSelector(selector){
  return document.querySelector(selector);
}

function nestedTarget(){
  return document.getElementById('nested').querySelector('.target');
}

function increaseRankBy(n){
  var table = document.querySelectorAll('ul.ranked-list li'); 
  debugger;
  for(var i = 0; i < table.length; i++){
  table[i].innerHTML = parseInt(table[i].innerHTML) + n ;
  }
}

function deepestChild() {
  var current = document.getElementById('grand-node');
  var next = current[0].children;
 
  while(next){
    current = next;
    next = current.children[0];
  }
  return current;
}
