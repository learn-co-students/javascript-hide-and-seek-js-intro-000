function getFirstSelector(selector) {
  //accepts a selector and returns the 1st element it matches
  const selector1 = document.querySelector(selector);
  return selector1;
}

function nestedTarget () {
  // <div id="nested" class="target"></div>
  //pulls a .target out of #nested  .getElementById(searchFor)  needed?
  return document.querySelector("#nested .target");;
} 

function increaseRankBy(n) {
  var nodeList;
  var i;
  //increase the rank of in all .ranked-list's by n
  nodeList = document.querySelectorAll(" .ranked-list li");
  console.log(nodeList);
  for ( i = 0 ; i < nodeList.length ; i++ ) {
     nodeList[i].innerHTML = parseInt(nodeList[i].innerHTML) + n;
  }
  return nodeList;
}

function deepestChild() {
  var node;
  //stores the NodeList
  //pulls the most deeply nested child from  div#grand-node
  //supposed to be related to breadth first search...
  node = document.querySelector("#grand-node");
  while (node.children.length > 0) {
    node = node.children[0];
  }
  return node;
}