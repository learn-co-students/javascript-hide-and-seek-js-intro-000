function getFirstSelector(selector){
  return document.querySelector(selector);
}
function deepestChild(){
  var start=document.getElementById("grand-node");
  while(start.querySelector("div")!=null){
    start=start.querySelector("div");
  }
  return start;
}
function increaseRankBy(n){
  const lis = document.getElementById('app').querySelectorAll('ul.ranked-list li');
  for (let i = 0; i < lis.length; i++) {
    lis[i].innerHTML = (parseInt(lis[i].innerHTML) + n).toString();
  }
}
function nestedTarget(){
  return document.querySelector(".target");
}
