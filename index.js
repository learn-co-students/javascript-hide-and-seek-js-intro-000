function getFirstSelector(selector){
  return document.querySelector(selector)
}
function nestedTarget(){
  return document.querySelector('#nested .target')
}

function increaseRankBy(n){
  var lis = document.getElementById('app').querySelectorAll('.ranked-list')
  for (let i = 0, l = lis.length; i < l; i++) {
  lis[i].innerHTML = (i + n).toString()

}
}

function deepestChild(){
    return document.querySelector('#grand-node div div div div')
}
