function getFirstSelector(selector) {
  return document.querySelector(selector)
}

function nestedTarget() {
  return document.querySelector('#nested .target')
}

function increaseRankBy(n) {
  var element = document.querySelectorAll('.ranked-list li')
  for (var i=0; i < element.length; i++) {
    var a = parseInt(element[i].innerHTML)
    element[i].innerHTML = parseInt(element[i].innerHTML) + n
  }
}

function deepestChild () {
  var current_node = document.getElementById('grand-node')
  var next_node = current_node.children[0]
  console.log(next_node.innerHTML)
  while (next_node) {
    current_node = next_node
    next_node = current_node.children[0]
  }
  return current_node
}
