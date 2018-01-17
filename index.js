function getFirstSelector(selector) {

  return document.querySelector(selector)

}

function nestedTarget() {

  //return document.getElementById('nested').getElementsByClassName('target')
  return document.querySelector('#nested .target')

}

function increaseRankBy(n) {

  const lis = document.getElementById('app').querySelectorAll('.ranked-list li')

  for (var i = 0; i < lis.length; i++) {
    lis[i].innerHTML = parseInt(lis[i].innerHTML) + n
  }

}

function deepestChild() {

  let current = document.getElementById('grand-node')
  var next

  next = current.querySelectorAll('div')
  while(next[0]) {
    current = next[0]
    next = current.querySelectorAll('div')
  }
  return current
}
