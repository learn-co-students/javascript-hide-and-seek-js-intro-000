function getFirstSelector (selector) {
  return document.querySelector(selector)
}

function nestedTarget (nested, target) {
  return document.querySelector('#nested .target')
}

function increaseRankBy (n) {
  const list = document.querySelectorAll('.ranked-list')
  for (var i = 0; i < list.length; i++) {
    var children = list[i].children
    for (var x = 0; x < children.length; x++) {
      children[x].innerHTML = parseInt(children[x].innerHTML) + n
    }
  }
}

function deepestChild () {
  var children = document.getElementById('grand-node')
  var childrens = children.children[0]
  while (childrens) {
    children = childrens
    childrens = children.children[0]
  }
  return children
}
