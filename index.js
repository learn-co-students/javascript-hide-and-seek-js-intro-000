function getFirstSelector(selector) {
  return document.querySelector(selector);
}

function nestedTarget() {
  return document.getElementById('nested').querySelector('.target');
}

function increaseRankBy(n) {
  var rank = document.querySelectorAll('.ranked-list');
  for(var i=0; i<rank.length; i++){
    rank[i].innerHTML = parseInt(rank[i].innerHTML) + n;
  }
}

function deepestChild() {
  var current = 1;
  var next;

  current = document.querySelector('div#grand-node');
  next = document.querySelector('div#grand-node');
  while(true){
    next = next.querySelector('*');
    if(next === null){
      break;
    }
    current = next;
  }
  return current;
}
