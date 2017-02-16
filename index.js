function getFirstSelector(selector){
  return document.querySelector(selector);
}
function nestedTarget(){
  return document.getElementById('nested').querySelector('.target');
}

function increaseRankBy(n){
  const list = document.querySelectorAll('.ranked-list')

  for(let i = 0; i < list.length; i++){
    var children = list[i].children;
    for(let j = 0; j < children.length; j++){
      children[j].innerHTML = parseInt(children[j].innerHTML) + n
    }
  }
}

function deepestChild(){
  var node= document.getElementById('grand-node');
  var nextNode = node.children[0];

  while(nextNode){
    node = nextNode;
    nextNode = node.children[0];
  }
  return node;
}
