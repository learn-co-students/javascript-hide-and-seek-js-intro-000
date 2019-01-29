
function getFirstSelector(selector) {
  return document.querySelector(selector);
}

function nestedTarget() {
  return document.querySelector('#nested div.target');
}

function increaseRankBy(n) {
   var lis = document.getElementById('app').querySelectorAll('ul.ranked-list li');
   for (let i = 0; i < lis.length; i++) {
     var el = parseInt(lis[i].innerHTML, 10);
     lis[i].innerHTML = (el += n).toString();
   }
 }

function deepestChild() {
  let parentNode = document.getElementById('grand-node');
  let childNode = parentNode.children[0];

  while (childNode != null) {
    parentNode = childNode;
    childNode = parentNode.children[0];
  }
  return parentNode;
}
