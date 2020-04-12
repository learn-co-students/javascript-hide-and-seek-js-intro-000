
function getFirstSelector(selector) {
    return document.querySelector(selector)
}

function nestedTarget() {
  return document.getElementById('nested').querySelector('div.target')
}

function increaseRankBy(n) {
  const lis = document.getElementById('app').querySelectorAll('ul.ranked-list li')
  for (let i = 0; i < lis.length; i++) {
    lis[i].innerHTML = (parseInt(lis[i].innerHTML, 10) + n).toString()
  }
}

function deepestChild() {
  let current = document.getElementById('grand-node').querySelector('div')
  while (current) {
    if (current.querySelector('div')) {
      current = current.querySelector('div')
    }
    else {
      return current
    }
  }
}
