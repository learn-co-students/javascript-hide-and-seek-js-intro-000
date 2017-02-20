function getFirstSelector(selector) {
  return document.querySelector(selector)
}
function nestedTarget() {
  return document.querySelector('#nested .target')
}
function deepestChild() {
  var current=document.getElementById('grand-node').children[0]

  while (typeof current!=='undefined') {
    var next=current
    current=current.children[0]
  }
  return next
}
function increaseRankBy(n) {
var lis = document.querySelectorAll('ul.ranked-list li')
for (let i = 0, l = lis.length; i < l; i++) {
  lis[i].innerHTML=parseInt(lis[i].innerHTML)+n
}
return lis
}
