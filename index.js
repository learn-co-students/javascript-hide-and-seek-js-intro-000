
function getFirstSelector ( selector ) {
  return document.querySelector(selector)
}


function nestedTarget (){

  var container = document.querySelector("#nested");
  var matches = container.querySelector(".target");
  return matches
}


function increaseRankBy(n) {
  const lis = document
    .getElementById('app')
    .querySelectorAll('ul.ranked-list li');

  for (let i = 0; i < lis.length; i++) {
    lis[i].innerHTML =  parseInt(lis[i].innerHTML) + n;
  }
}

function deepestChild() {

const t1 = document.querySelector('#grand-node div div div div')
return t1
}
