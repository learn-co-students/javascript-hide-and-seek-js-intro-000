console.log("refreshed")
function getFirstSelector(entertag) {
  return document.querySelector(entertag);
}

function nestedTarget() {
  return document.querySelector('#nested .target');
}

//DeepestChild function starts here
const allNodes = document.querySelector('#grand-node');
function deepestChild() {
  var node = allNodes.children;
  while (node[0].childElementCount > 0) {
      node = node[0].children;
      console.log(node)
  }
  return node[0];
}

const list = document.querySelectorAll('.ranked-list li');
function increaseRankBy(n){
Array.from(list).forEach((e) => {
  e.innerHTML = (parseInt(e.innerHTML) + parseInt(n)).toString();
})
}

/*function nestedTarget() {
  document.querySelector('#nested .target');
}

function increaseRankBy(n){
Array.from(list).forEach((e) => {
  list[i].innerHTML += parseInt(n);
})
}
*/
