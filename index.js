function getFirstSelector(selector) {
  return document.querySelector(selector);
}

function nestedTarget(nested, target) {
  return document.getElementById('nested').querySelector('div.target');
}

function increaseRankBy(n) {
 const rankUp = document.getElementById('app').querySelectorAll('ul.ranked-list li');

 for (let i = 0; i < rankUp.length; i++) {
   var currentRank = parseInt(rankUp[i].innerHTML);
   rankUp[i].innerHTML = currentRank + n;
 }
}

 function deepestChild() {
   var findingDeepo = document.getElementById('grand-node').querySelectorAll('div');
   return findingDeepo[findingDeepo.length-1];
}
