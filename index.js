function getFirstSelector(selector){
  return document.querySelector(selector)
}

function nestedTarget(){
  return document.getElementById('nested').querySelector('div.target')
}

function increaseRankBy(n){
  var rank = document.getElementById('app').querySelectorAll('ul.ranked-list')
  for(let i = 0; i < rank.length; i++){
    rank[i].innerHTML = ((parseInt(rank[i].innerHTML)))
  }
}

function deepestChild(){
  var deep = document.getElementById('grand-node').querySelectorAll('div')
  return deep[deep.length - 1]
}
