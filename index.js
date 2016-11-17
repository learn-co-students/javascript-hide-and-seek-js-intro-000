function getFirstSelector(selector){
  return document.querySelector(selector);
}

function nestedTarget(){
  return document.querySelector("#nested .target");
}

function deepestChild(){
  var nodeList = document.querySelectorAll("#grand-node div");
  return nodeList[nodeList.length - 1];
}

function increaseRankBy(n){
  var nodeList = document.querySelectorAll(".ranked-list li");
  for (let i = 0; i < nodeList.length; i++){
    nodeList[i].innerHTML = parseInt(nodeList[i].innerHTML) + n;
  }
}
