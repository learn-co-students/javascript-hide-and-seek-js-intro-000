function getFirstSelector(selector){
  return document.querySelector(selector)
 }


 function nestedTarget() {
   return document.getElementById('nested').querySelector('div.target')
 }
 
 
 function increaseRankBy(n) {
  const rankHigher = document.getElementById('app').querySelectorAll('ul.ranked-list')
  
  for (let i = 0; i < rankHigher.length; i++) {
    rankHigher[i].innerHTML = ((parseInt(rankHigher[i].innerHTML)) + n)
  }
 }

function deepestChild() {
  var deep = document.getElementById('grand-node').querySelectorAll('div')
  return deep[deep.length - 1]
}