function getFirstSelector(selector) {
    return document.querySelector(selector)
}



function nestedTarget() {
  return document.querySelector('#nested .target')
}


function increaseRankBy(n) {
  const rankList = document.querySelectorAll('.ranked-list')
  for (let i = 0; i < rankList.length; i++) {
    let itemInt = rankList.innerHTML
    itemInt += n
      rankList[i].innerHTML = itemInt.toString()
  }
}

function deepestChild() {
var answer
var children = {}
var counter = 0
var list = document.querySelectorAll('#grand-node > div')
  for (var i = 0; i < list.length; i++) {
    var current_child = list[i]
    while (current_child.querySelector(':first-child') != null) {
      counter += 1
      current_child = current_child.querySelector(':first-child')
      deepestChild = current_child

}
        if (children[i] === undefined || children[i] < counter) {
          children[i] = counter
          answer = deepestChild
        }
        counter = 0
        }
return answer
}
