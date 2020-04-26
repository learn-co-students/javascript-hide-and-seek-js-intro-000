function getFirstSelector(selector){
  return document.querySelector(selector)
}

function nestedTarget(){
  return document.getElementById('nested').querySelector('.target')
}
function increaseRankBy(n){
  //var lis = document.getElementById('app').querySelectorAll('.ranked-list');

var lis = document.querySelectorAll('.ranked-list li')
  for (let i = 0; i < lis.length; i++) {
    lis[i].innerHTML = parseInt(lis[i].innerHTML) + n//(i + n).toString();
  }
}

//function deepestChild(){
  //div#grand-node`. (Remember, you can iterate over elements and call
  //`querySelector()` and `querySelectorAll()
//}
  function deepestChild() {
    var deep = document.getElementById('grand-node').querySelectorAll('div')
  return deep[deep.length-1]

}
