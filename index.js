function getFirstSelector(selector){
  return document.querySelector(selector)
}

function nestedTarget(){
      return document.getElementById('nested').querySelector('div.target')
}

function increaseRankBy(n){
      var ranks = document.getElementById('app').querySelectorAll('ul.ranked-list');
      for (let i = 0; i < ranks.length; i++) {
      ranks[i].innerHTML = parseInt(ranks[i].innerHTML) + n;
  }
}

function deepestChild(){
var depth = document.getElementById('grand-node').querySelectorAll('div')
return depth[depth.length - 1]
}
