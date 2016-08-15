function getFirstSelector(selector) {
  return document.querySelector(selector)
}

function nestedTarget() {
  return document.querySelector('#nested .target')
}

function increaseRankBy(n) {
  var list = document.querySelectorAll('ul.ranked-list li')
  for (let i = 0; i < list.length; i++) {
    list[i].innerHTML = parseInt(list[i].innerHTML, 10) + n;
  }
}

function deepestChild() {
  var list = document.querySelector('div#grand-node')
    do {
      list = list.querySelector('div')
  }
    while(!!list.querySelector('div'))
  return list
  }
