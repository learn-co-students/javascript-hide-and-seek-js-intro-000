function getFirstSelector(selector) {
  return document.querySelector(selector);
}

function nestedTarget() {
  return document.getElementById('nested').querySelector('div.target')
}

function increaseRankBy(n) {
  const list= document.getElementById('app').querySelectorAll('ul.ranked-list li');
  for (let i=0;i < list.length;i++) {
    list[i].innerHTML= list[i].innerHTML+n;
  }
}

function deepestChild () {
var list= document.getElementById('grand-node').querySelectorAll('div');
var array=[];
array.push(list);
var criteriaFn= function criteria() {
  div.innerHTML= "boo!"
}
function find (array,criteriaFn) {
for (let i = 0, l = array.length; i < l; i++) {
  if (criteriaFn(array[i])) {
    return array[i]
      }
    }
  }
}
