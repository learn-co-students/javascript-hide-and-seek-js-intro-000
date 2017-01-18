function deepestChild(){
  var Mynode = document.getElementById('grand-node');
  var SecondNode = Mynode.children[0];

  while (SecondNode){
    Mynode = SecondNode;
    SecondNode = Mynode.children[0]
  }
  return Mynode
}
function getFirstSelector(selector){
  return document.querySelector(selector)
}

function nestedTarget() {
  return document.querySelector ('#nested .target')
}
function increaseRankBy(n) {
  let ranked = document.querySelectorAll('ul.ranked-list li');
  console.log(ranked);
  for (let i=0, l = ranked.length; i < l; i++) {
    ranked[i].innerHTML = parseInt(ranked[i].innerHTML) + n;
  }
}