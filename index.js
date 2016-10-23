function getFirstSelector(selector) {
  return document.querySelector(selector)
}
function nestedTarget(){
  return document.querySelector('#nested  .target ')
}
function increaseRankBy(n) {
  var rankedLists = document.querySelectorAll('.ranked-list')
  for (let i = 0; i<rankedLists.length; i++) {
    for (let j=0; j<rankedLists[i].children.length; j++) {
      rankedLists[i].children[j].innerHTML=(n+parseInt(rankedLists[i].children[j].innerHTML)).toString()
    }
  }
}
/* hang up was that rankedLists[1].length doesn't work. Not exactly clear why. Needed to be
rankedLists[1].children. This gives length correctly. */
function deepestChild (){
return document.querySelector('#grand-node div div div div');
}
