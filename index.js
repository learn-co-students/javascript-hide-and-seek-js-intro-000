function getFirstSelector(selector){
  const nodes = document.getElementById('app').querySelectorAll(selector)
  return nodes[0]
}

function nestedTarget(){
  return document.querySelector('#nested .target')
}

function deepestChild(){
  const div = document.getElementById("grand-node").querySelectorAll('div')
  return div[div.length - 1]//.innerHTML
}

function increaseRankBy(n){
  const ranks = document.querySelectorAll('ul.ranked-list li')

  for (var i = 0; i < ranks.length; i++){
    let parsed = parseInt(ranks[i].innerHTML)
    ranks[i].innerHTML = parsed + n
  }
}
