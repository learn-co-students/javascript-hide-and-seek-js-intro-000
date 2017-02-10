function getFirstSelector(selector) {
  return document.querySelector(selector);
}

function nestedTarget() {
  return document.getElementById('nested').querySelector('div.target')
}

function increaseRankBy(n) {
  const list= document.getElementById('app').querySelectorAll('ul.ranked-list li');
  for (let i=0;i < list.length;i++) {
    list[i].innerHTML= parseInt(list[i].innerHTML)+n;
  }
}

function deepestChild () {
var list= document.getElementById('grand-node');
var child=list.children;
while (child) {
  list=child
  child=list.children;
  }
  return list[0];
}
