function getFirstSelector(selector) {
  return document.querySelector(selector)
}

function nestedTarget() {
  return document.getElementById('nested').querySelector('.target')
}

function deepestChild() {
  return document.getElementById('grand-node').querySelectorAll('div')[3]
}

function increaseRankBy(n) {
  let array = document.querySelectorAll('.ranked-list ')

  for (let i = 0; i < array.length; i++){
    let kids = array[i].children
    for (let j = 0; j < kids.length; j++){
       kids[j].innerHTML = parseInt(kids[j].innerHTML) + n
    }
  }
  return array;
}
