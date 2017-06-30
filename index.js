function getFirstSelector(selector) {
  return document.querySelector(selector)
}

function nestedTarget() {
  return document.querySelector("#nested .target")
}

function increaseRankBy(n) {
  var lists = document.querySelectorAll(".ranked-list li")

  lists.forEach(list => {
    list.innerHTML = (parseInt(list.innerHTML) + n).toString()
  })

  return lists.length
}

function deepestChild() {
  var node = document.querySelector("div#grand-node")

  while (node.children.length > 0) {
    node = node.children[0]
  }

  return node

}
