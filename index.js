function getFirstSelector(selector) {
  return document.querySelector(selector);
}
function nestedTarget() {
  return document.getElementById('nested').querySelector('div.target')
}

function increaseRankBy(n) {
  let ranked = document.querySelectorAll('ul.ranked-list li');
  console.log(ranked);
  for (let i=0, l = ranked.length; i < l; i++) {
    ranked[i].innerHTML = parseInt(ranked[i].innerHTML) + n;
  }
}

 function deepestChild() {
   let ranked = document.getElementById('grand-node').querySelector('div div div div div');
  //  let sub = ranked.child;
   return ranked;
 }

 deepestChild();
