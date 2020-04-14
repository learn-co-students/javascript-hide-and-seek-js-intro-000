function getFirstSelector(selector) {
  return document.querySelector(selector)
}

function nestedTarget() {
  return document.getElementById('nested').querySelector('.target')
}

function deepestChild() {
  const div = document.querySelectorAll('#grand-node div')
  return div[div.length - 1]
}


function increaseRankBy(n) {
  const lis = document.querySelectorAll('.ranked-list li')
  for (let i = 0; i < lis.length; i++) {
    lis[i].innerHTML = parseInt(lis[i].innerHTML) + n
  }
  }

  