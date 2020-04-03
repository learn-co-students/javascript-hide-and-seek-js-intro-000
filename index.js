function getFirstSelector(sel) {
  return document.querySelector(sel)
}

function nestedTarget() {
  return document.querySelector('div#nested div.target')
}

function increaseRankBy(n) {
  const all = document.querySelectorAll('main#app ul.ranked-list li')
  for (let i = 0; i < all.length; i++) {
    all[i].innerHTML = (parseInt(all[i].innerHTML) + n).toString();
  }
  return all
}

function deepestChild() {
    return document.querySelector('div#grand-node div div div div')
}
