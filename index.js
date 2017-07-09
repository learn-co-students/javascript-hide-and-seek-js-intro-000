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

  current = document.getElementById('grand-node');
  next = current.children[0];
  while(next){
    current = next
    next = current.children[0];
  }
  return current;
}
