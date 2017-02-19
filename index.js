function getFirstSelector (selector) {
  const result = document.querySelector(selector)
  return result;
}

function nestedTarget () {
  const target = document.getElementById('nested').getElementsByClassName('target')
  return target[0];
}

function increaseRankBy (n) {
  const ranked = document.getElementById('app').querySelectorAll("ul.ranked-list li")

  for (let i = 0, l = ranked.length; i < l; i++) {
    var number = parseInt(n)
    var list_number = parseInt(ranked[i].innerHTML)
    ranked[i].innerHTML = (list_number + number)
  }
}

function deepestChild () {
  const deepest = document.getElementById('grand-node').querySelectorAll("div")
  const len = deepest.length - 1
  return deepest[len];
}
