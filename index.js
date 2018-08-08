// function getFirstSelector(selector){
//   return document.querySelector(selector);
// }
// function nestedTarget(){
//   return document.querySelector('#nested .target');
// }
// function deepestChild(){
//
// }
// function increaseRankBy(n){
//   const lis = document.getElementById('app').querySelectorAll('ul.ranked-list li')
//
//   for (let i = 0; i < lis.length; i++) {
//     rank[i].innerHTML = parseInt(rank[i].innerHTML) + n;
//   }
// }
function getFirstSelector(selector){
  return document.querySelector(selector);
}
function nestedTarget(){
  return document.querySelector('#nested .target');

}
function increaseRankBy(n){
  const li = document.getElementById('app').querySelectorAll('ul.ranked-list li');
  for(var i = 0; i< li.length; i++){
    li[i].innerHTML = parseInt(li[i].innerHTML) + n
  }
}
function deepestChild(){
return document.querySelector('#grand-node div div div div')
}
