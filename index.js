function getFirstSelector(selector) {
  return document.querySelector(selector);
}

function nestedTarget() {
  return document.querySelector('#nested .target');
}

function increaseRankBy(n){
  var lis = document.getElementById('app').querySelectorAll('ul.ranked-list li');
  for(let i = 0; i < lis.length; i++){
    let temp = parseInt(lis[i].innerHTML) + n ;
    lis[i].innerHTML = temp.toString();
  }
}

function deepestChild(){
  var node = document.getElementById('grand-node')
  let nextNode = node.children[0]

  while (nextNode){
    node = nextNode
    nextNode = node.children[0]
  }
  return node;
}
