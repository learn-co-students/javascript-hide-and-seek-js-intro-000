function getFirstSelector(selector) {
  return document.querySelector(selector)
}

function nestedTarget () {
return document.getElementById ("nested").querySelector ("div.target")
}

function increaseRankBy(n) {
  var RankUp = document.getElementById("app").querySelectorAll("ul.ranked-list")
  for (let i = 0; i <RankUp.length; i++) {
  RankUp[i].innerHTML = ((parseInt(RankUp[i].innerHTML)) + n)
}
}

function deepestChild() {
  var deeply = document.getElementById('grand-node').querySelectorAll('div')
  return deeply[deeply.length-1]
}
