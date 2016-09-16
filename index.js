function getFirstSelector(selector){
  return document.querySelector(selector)
}

function nestedTarget(){
  return document.querySelector('#app #nested div div div .target')
}

function increaseRankBy(n){
  const lis = document.getElementById('app').querySelectorAll('ul.ranked-list li')
  for (var i = 0; i < lis.length; i++){
    lis[i].innerHTML = (parseInt(lis[i].innerHTML, 10) + n).toString()
  }
}

function deepestChild(){
  var QS = '#grand-node'
  var lis = document.getElementById('app').querySelectorAll(QS)
  var lis2 = lis
  while(lis){
    lis2 = lis
    QS = QS + ' div'
    lis = document.getElementById('app').querySelector(QS)
  }
  return lis2
}


/*
- Remember, you can iterate over elements and call
`querySelector()` and `querySelectorAll()`
- `div#grand-node` has only one node at each level — for this lab, you can solve
for that case, and not worry about a case where there are sibling nodes.
- Remember learning about breadth-first search? A similar technique
might come in handy here.
*/
