
function getFirstSelector(selector) {
  var myString = document.querySelector(selector);
  return myString;
}


function nestedTarget() {
return document.getElementById("nested").querySelector("div.target");
}

function increaseRankBy(n){
 const myRank = document.getElementById('app').querySelectorAll('ul.ranked-list li');
 for (let i = 0; i < myRank.length; i++) {
   myRank[i].innerHTML = ((parseInt(myRank[i].innerHTML)) + n);
 }
  return myRank;
}

function deepestChild(){
  const allChilds = document.getElementById('grand-node').querySelectorAll('div');
  const deepestChild = allChilds[allChilds.length - 1];
  return deepestChild;
}
