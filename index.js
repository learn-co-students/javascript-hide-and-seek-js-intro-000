function getFirstSelector(selector)
{
  return document.querySelector(selector)
}

function nestedTarget()
{
  return document.getElementById('nested').querySelector('div.target')
}

function increaseRankBy(n)
{
  var rankUp = document.getElementById('app').querySelectorAll('ul.ranked-list li')

  for (var i = 0; i < rankUp.length; i++) {
    // rankUp[i].innerHTML = parseInt(rankUp[i].innerHTML) + n;
    rankUp[i].innerHTML = parseInt(rankUp[i].innerHTML) + n;
  }
}

// function deepestChild()
// {
//   var grandNode = document.querySelector("#grand-node")
//   var deepestNode = grandNode.children[0];
//
//   for (var i = 0; !deepestNode.children[i]; i) {
//       deepestNode = deepestNode.children[i]
//
//   }
//   return deepestNode;
// }
function deepestChild(){
   var deep = document.getElementById('grand-node').querySelectorAll('div')
   return deep[deep.length-1]
 }
