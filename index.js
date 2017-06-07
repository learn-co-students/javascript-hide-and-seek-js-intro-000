function getFirstSelector(selector) {

  return document.querySelector(`${selector}`)
}

var idHTML = "nested", classHTML = "target"
function nestedTarget() {

  return document.querySelector(`#${idHTML} .${classHTML}`)
}

function increaseRankBy(n) {
const list = document.querySelectorAll('.ranked-list li')

for (var i=0,l=list.length;i<l;i++){
  list[i].innerHTML = parseInt(list[i].innerHTML,10) + n
}

}

function deepestChild() {
  const main = document.querySelector('div#grand-node')
  var current = main.children[0]

  while(current.children[0]) {
    current = current.children[0]
  }
  return current

}
