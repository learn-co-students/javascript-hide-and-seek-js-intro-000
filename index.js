function getFirstSelector(selector) {
  return document.querySelector(selector);
}

function nestedTarget() {
  return document.getElementById('nested').querySelector('.target')
}

function deepestChild() {
let node = document.getElementById('grand-node');
let nextNode = node.children[0];

while(nextNode){
  node = nextNode;
  nextNode = node.children[0];
}
return node;
}

function increaseRankBy(n) {
const lis = document.getElementById('app').querySelectorAll('.ranked-list')

for (let i = 0, l = lis.length; i < l; i++) {
  lis[i].innerHTML = (i + n).toString()
}
return lis;
}
