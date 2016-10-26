function getFirstSelector(selector) {
  return document.querySelector(selector);
}

function nestedTarget() {
  return document.getElementById('nested').querySelector('div.target')
}

function increaseRankBy(n) {
  var list= document.getElementById('app').querySelectorAll('ul.ranked-list');
  var array=[];
  array.push(list);
  for (var i=0;i < array.length;i++) {
    array[i+n];
  }
  list= array
}

function deepestChild () {
var list= document.getElementById('grand-node').querySelectorAll('div');
var array=[];
array.push(list);
var criteriaFn= function criteria() {
  innerHTML= "boo!"
}
function find (array,criteriaFn) {
for (let i = 0, l = array.length; i < l; i++) {
  if (criteriaFn(array[i])) {
    return array[i]
      }
    }
  }

}
