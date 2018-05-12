function getFirstSelector(selector) {
 return  document.querySelector(selector)
}

function nestedTarget() {
  return document.querySelector("#nested .target")
}

function increaseRankBy(n) {
  var list = document.querySelectorAll('.ranked-list')

  for (var i=0; i < list.length; i++) {
    var children = list[i].children

    for (var a=0; a < children.length; a++)
      children[a].innerHTML = parseInt(children[a].innerHTML) + n

  }
}

function deepestChild() {
  var depth = document.getElementById('grand-node')
  var next = depth.children[0]

  while (next) {
    depth = next
    next = depth.children[0]
  }

  return depth
}
