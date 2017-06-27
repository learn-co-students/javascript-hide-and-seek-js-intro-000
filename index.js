function getFirstSelector(selector){
  return document.querySelector(selector);
// let element = document.querySelector("div");
//   for (let i = 0; i < element.length; i++){
//   let selector = element;
//   return selector;
//   }
}

function nestedTarget(){
 return document.querySelector('#nested .target');
}

function increaseRankBy(n){
  var rankList = document.querySelectorAll('.ranked-list li');
  // rankList is an array
  for (var i = 0; i < rankList.length; i++){
    rankList[i].innerHTML = parseInt(rankList[i].innerHTML) + n; // 1 + 1
  }
return rankList

}

function deepestChild(){
  let current = document.querySelector('#grand-node');
  let child = current.querySelector('div')
  while(child){
    current = child;
    child = current.querySelector('div')
  }
  return current
}
