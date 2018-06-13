function getFirstSelector(selector) {
  var element = document.querySelector(selector);
  return element
}

function nestedTarget(){
return document.querySelector('div#nested')
}

function increaseRankBy(n) {
  var lis=document.getElementById("app").querySelectorAll("ul.ranked-list li");
  for (let i = 0; i < lis.length; i++){
    lis[i].innerHTML=parseInt(lis[i].innerHTML)+n;
  }
}

function deepestChild() {
  var lis=document.getElementById("grand-node").querySelectorAll("div");
  var a;
  for(let i=0;i<lis.length-1;i++) {
    a=lis[i].querySelector("div");
  }
return a;
}
