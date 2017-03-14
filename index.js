function getFirstSelector(selector) {
  return document.querySelector(selector)
}

//pulls a .target out of #nested
function nestedTarget(){
  return document.querySelector('#nested .target')
}

function increaseRankBy(n){
  const lis = document.querySelectorAll('.ranked-list')
  for (let i = 0, l = lis.length; i < l; i++) {
  lis[i].innerHTML = (i + 1).toString()
}
}

function  deepestChild(){
var passing = document.querySelector('div#grand-node');
  while (typeof passing !== 'undefined') {
    var next_level = passing
    passing = passing.children[0]
  }
return next_level
}
