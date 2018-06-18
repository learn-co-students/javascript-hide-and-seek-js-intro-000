function getFirstSelector(selector){
  return document.querySelector(selector)
}

function nestedTarget(){
  return document.querySelector('#nested .target')
}

function increaseRankBy(n){
  let list = document.querySelectorAll('ul.ranked-list')
  for (let i = 0; i < list.length; i++){
    list[i].innerHTML = (i + n)
  }
}

function deepestChild() {
  let top = document.getElementById('grand-node')
  let child = top.children[0]

  while (child) {
    top = child
    child = top.children[0]
  }

  return top
}
