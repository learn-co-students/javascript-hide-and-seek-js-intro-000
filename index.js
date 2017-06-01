function getFirstSelector(selector) {
  return document.querySelector(selector)
}

function increaseRankBy(number) {
  var lists = document.getElementsByClassName("ranked-list");
  for (var i = 0; i < lists.length; i++) {
    var result = parseInt(lists[i])
    lists[i].innerHTML = result + number
  }
}

function nestedTarget() {
  var nodes = document.querySelector("#nested")
  var stringOfNodes = ""
  var currentNodeType = nodes.nodeName
  var loop = true
  while (loop === true) {
    if (nodes.querySelector(`${stringOfNodes}.target`)) {
      loop = false
      return nodes.querySelector(`${stringOfNodes}.target`)
    } else {
      stringOfNodes = `${stringOfNodes} ${currentNodeType}`
    }
  }
}

function deepestChild() {
  var loop = true
  var stringOfNodes = ""
  var lastString = ""

  while (loop === true) {
    var nodes = document.querySelector("#grand-node " + stringOfNodes)

    if (nodes.children.length === 0) {
      loop = false
      return nodes
    } else {
      var newNodeName = nodes.children[0].nodeName
      lastString = stringOfNodes
      stringOfNodes = `${stringOfNodes} ${newNodeName}`
    }
  }
}
