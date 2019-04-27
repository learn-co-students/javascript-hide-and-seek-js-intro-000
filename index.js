function getFirstSelector(ul){
    return document.querySelector(ul);
}

function nestedTarget(){
    return document.getElementById("nested").querySelector('.target');
}

function increaseRankBy(n){
    var list = document.getElementById("app").querySelectorAll("ul.ranked-list li");
    for(let i = 0; i < list.length; i++){
        list[i].innerHTML = parseInt(list[i].innerHTML) + n;
    }
}

function deepestChild() {
  let gNode = document.querySelector('#grand-node')
  let nextNode = gNode.children[0];
  
  while (nextNode) {
    gNode = nextNode;
    nextNode = gNode.children[0];
  }
  return (gNode);
}