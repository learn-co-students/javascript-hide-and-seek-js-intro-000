function getFirstSelector(selector) {
  return document.querySelector(selector)
}

function nestedTarget() {
  return document.querySelector('#nested div.target')
}

function deepestChild() {
  return document.getElementById('grand-node').querySelectorAll('div')[3]
}

function increaseRankBy(n) {
  let counter = 0
  const listItem = document.querySelectorAll('ul.ranked-list li')
  debugger
  while (counter < listItem.length) {
    listItem[counter].innerHTML = Number(listItem[counter].innerHTML) + n
    counter++
  }
}
