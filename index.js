function getFirstSelector(selector) {
  return document.querySelector(selector)
}

function nestedTarget() {
  return document.querySelector("#nested .target")
}

function deepestChild(argument) {
  var child = document.querySelector("div#grand-node")
  do {
    child = child.querySelector('div')
  } while(!!child.querySelector('div'))
  return child
}

function increaseRankBy(n) {
  var list = document.querySelectorAll('.ranked-list li')
  for(var i = 0; i < 5; i++) {
    list[i].innerText = parseInt(list[i].innerText) + n;
  }
}