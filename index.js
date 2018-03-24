function getFirstSelector(selector) {
  return document.querySelectorAll(selector)[0]
}

function nestedTarget() {
  return document.getElementById('nested').querySelectorAll('.target')[0]
}

function increaseRankBy(n) {
  let rlists = document.querySelectorAll('.ranked-list')
  for(let i = 0; i < rlists.length; i++) {
    rlists[i].innerHTML = (parseInt(rlists[i].innerHTML) + n).toString()
  }
}

function deepestChild() {
  let current = document.getElementById('grand-node')
  while (current) {
    if(!current.firstElementChild) {
      return current
    } else {
      current = current.firstElementChild
    }
  }
}
