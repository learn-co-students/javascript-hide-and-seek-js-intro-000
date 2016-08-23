"use strict"

function getFirstSelector(selector) {
  var element = document.querySelector(selector)
  return element;
}

function nestedTarget() {
  return document.querySelector("#nested .target")
}

function increaseRankBy(n) {
  var lis = document.getElementById('app').querySelectorAll('ul.ranked-list li')

  for (var i = 0; i < lis.length; i++) {
    lis[i].innerHTML = parseInt(lis[i].innerHTML, 10) + n
  }
}

function deepestChild() {
  let node = document.getElementById('grand-node')
  let nextNode = node.children[0]
  while (nextNode) {
    node = nextNode
    nextNode = node.children[0]
  }
  return node
}
