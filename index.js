function getFirstSelector(selector) {
    return document.querySelector(selector)
}


function nestedTarget() {
  return document.querySelector('#nested .target')
}


function increaseRankBy(n) {
  const rankList = document.querySelectorAll('.ranked-list')
  for (let i = 0; i < rankList.length; i++) {
    let itemInt = rankList.innerHTML
    itemInt += n
      rankList[i].innerHTML = itemInt.toString()
  }
}
