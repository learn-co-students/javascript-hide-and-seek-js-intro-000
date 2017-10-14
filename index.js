function getFirstSelector(selector) {
  return document.querySelector(selector)
}

function nestedTarget() {
  return document.querySelector('#nested .target')
}

function increaseRankBy(n) {
  const list = document.querySelectorAll('ul.ranked-list li')
  for (var i = 0; i < list.length; i++) {
    list[i].innerHTML = parseInt(list[i].innerHTML) + n
  }
}

function deepestChild() {
  var current = document.getElementById('grand-node')
  var next = current.children[0]

   while (next) {
     current = next
     next = current.children[0]
   }
   return current
}
