function getFirstSelector(s) {
  return document.querySelector(s)
}

function nestedTarget() {
  return document.getElementById('nested')
    .querySelector('.target')
}

function increaseRankBy(n) {
  const l = document.querySelectorAll('.ranked-list li')
  for(let i = 0; i < l.length; ++i) {
    l[i].innerHTML = parseInt(l[i].innerHTML) + n
  }
}

function deepestChild() {
  let l = document.querySelectorAll('div#grand-node div')
  return l[l.length - 1]
}
