function getFirstSelector(selector) {
  return document.querySelector(selector)
}

function nestedTarget() {
  return document.getElementById('nested').querySelector('div.target')
}

function increaseRankBy(n) {
  var incRank = document.querySelectorAll('ul.ranked-list li');
  for (var i = 0; i < incRank.length; i++) {
    incRank[i].innerHTML = parseInt(incRank[i].innerHTML) + n
  }
}

function deepestChild(){
  var deepest = document.getElementById('grand-node').querySelectorAll('div')
  return deepest[deepest.length-1]
}
