function getFirstSelector(selector){
  return document.querySelector(selector)
}

function nestedTarget(){
  return document.querySelector('#nested .target')
}

function deepestChild(){
  return document.querySelector('#grand-node div div div div')
}

function increaseRankBy(n){
  var num = 0
  var list = document.querySelectorAll('.ranked-list li')
  for(var i = 0; i<list.length; i++){
    num = (parseInt(list[i].innerHTML)) + n;
    (list[i].innerHTML) = num
  }
}
