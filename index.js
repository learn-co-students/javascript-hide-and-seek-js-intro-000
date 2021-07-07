function getFirstSelector(selector) {
  return document.querySelector(selector)
}

function nestedTarget() {
  return document.getElementById('nested').querySelector('div.target')
}

function increaseRankBy(n) {
/*  var list = document.querySelectorAll('ranked-list')
  for (var i in list){
    var li = list[i].querySelectorAll('li')
    for (var i in li) {
      var toChange = li[i].textContent
      return li[i].textcontent = (parseInt(toChange, 10)+n)
    }
  }*/
  const rankedLists = document.getElementsByClassName('ranked-list');
   for (let i = 0; i < rankedLists.length; i++) {
     rankedLists[i].textContent = (parseInt(rankedLists[i].textContent) + n)
   }
}

function deepestChild() {
  var nested = document.getElementById('grand-node')
  var egg = nested.children[0]
  while (egg){

    nested = egg
    egg = nested.children[0]
  }
  return nested
  /*while (nested.length) {
    var fullList = nested
    fullList.concat(querySelectorAll('div'))
    return fullList
  }*/
}
