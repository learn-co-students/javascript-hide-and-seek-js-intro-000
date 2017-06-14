function getFirstSelector(selector){
return document.querySelector(selector)
}

function nestedTarget(){
return document.querySelector('#nested .target')
}

function deepestChild(){
var ss  = document.querySelectorAll('#grand-node')[0]
return ss
}
function increaseRankBy(n){
  var all = document.querySelectorAll('.ranked-list')
  var rank1 = all[0]
  var rank2 = all[1]
  var chi1 = rank1.children
  var chi2 = rank2.children
  var add = 1
  for( let i = 0 ; i < chi1.length ; i++){
  chi1[i].innerHTML = (add+i+n).toString()
  }
  var add2 = 12
  for ( let i = 0 ; i < chi2.length ; i++){
  chi2[i].innerHTML = (add2-i+n).toString() }

  }
