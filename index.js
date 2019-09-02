function getFirstSelector(selector){
  return document.querySelector(selector)
}
function nestedTarget(){
  return document.querySelector('#nested .target')
}
function deepestChild(){
  var node=document.getElementById('grand-node')
  var nextNode=node.children[0]

  while(nextNode){
    node=nextNode;
    nextNode=node.children[0]
  }
  return node
}
function increaseRankBy(n){
  var rankedLists = document.querySelectorAll('.ranked-list');

 for (let i = 0, l = rankedLists.length; i < l; i++) {
   let children = rankedLists[i].children;

   for (let j = 0, k = children.length; j < k; j++) {
     children[j].innerHTML = parseInt(children[j].innerHTML) + n;
   }
 }
}
