function getFirstSelector(selector) {
  var a = document.querySelector(selector);
return a ;
}

getFirstSelector('div')


function nestedTarget() {
  const a = document.querySelector('div.target')
  return a
}

function deepestChild() {
  var nodes = document.querySelectorAll('#grand-node div');
  var mostDeep = nodes[nodes.length- 1];
  
return mostDeep;
}

function increaseRankBy(n) {
  const lis = document.getElementById('app').querySelectorAll('ul.ranked-list li')
 
  for (let i = 0, l = lis.length ; i < l; i++) {
    lis[i].innerHTML = (parseInt(lis[i].innerHTML) + n).toString();
  
  }
  
}