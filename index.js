function getFirstSelector(selector){
  return document.querySelector(selector);
}

function nestedTarget(){
  return document.querySelector("#nested .target");
}

function increaseRankBy(n){
  var ranks = document.querySelectorAll(".ranked-list li");
  for(var i = 0; i < ranks.length; i++){
    var rank = parseInt(ranks[i].innerHTML);
    rank += n;
    ranks[i].innerHTML = rank;
  }
}


function deepestChild(){
  var topNodes = document.querySelector('div#grand-node').children;
  var current = topNodes;
  var next = [];
  var deepest;
  // Breadth first search! Returns when it finds the lowest level.
  while(current.length !== 0){
    deepest = current[0];
    for(var i = 0; i < current.length; i++){
      if(current[i].children.length !== 0){
        next.concat(current.children);
      }
    }
    current = next;
    next = [];
  }
  return deepest;
}
