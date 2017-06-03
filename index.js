function getFirstSelector(selector){
   const firstSelector = document.querySelector(selector);
   return firstSelector;
}


function nestedTarget(){
  const targ = document.querySelector('div.target');
  return targ;
}

function increaseRankBy(n) {
  const rankedList = document.querySelectorAll('ul.ranked-list li');
  for (let i=0;i<rankedList.length;i++){
    rankedList[i].innerHTML = parseInt(rankedList[i].innerHTML,10)  + n;
  }
}

function deepestChild() {
  const divsInGrandNode = document.getElementById('grand-node').querySelectorAll('div');
  return divsInGrandNode[divsInGrandNode.length-1];
}

/*
function deepestChild() {
  var divsInGrandNode = document.getElementById('grand-node').querySelector('div');
  var lastDivsInGrandNode;
  while (divsInGrandNode !== null) {
    lastDivsInGrandNode = divsInGrandNode;
    divsInGrandNode = divsInGrandNode.querySelector('div');
    debugger;
  }
  return lastDivsInGrandNode;
}
*/
