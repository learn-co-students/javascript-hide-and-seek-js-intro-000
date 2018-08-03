function getFirstSelector(selector){
  return document.querySelector(selector)
}

function nestedTarget(){
  return document.getElementById('nested').querySelector('.target')
}

function increaseRankBy(n){
  var l = document.querySelectorAll('ul.ranked-list')
  for (var i = 0; i < l.length; i++) {
    l[i].innerHTML = parseInt(l[i].innerHTML) + n
  }
}

function deepestChild(){
  var current = document.getElementById('grand-node')
  var next = current.children[0]
  while (next) {
    current = next
    next = current.children[0]
  }
  return current
}
