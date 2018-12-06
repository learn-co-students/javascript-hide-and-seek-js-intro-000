
function getFirstSelector(selector){
  return document.querySelectorAll(selector)[0]
}

function nestedTarget(){
  return document.getElementById("nested").getElementsByTagName('div')[3]
}

function increaseRankBy(n){
  const lis = document
  .getElementById("app")
  .querySelectorAll("ul.ranked-list li")

  for (var i = 0 ; i < lis.length ; i++){
    lis[i].innerHTML = parseInt(lis[i].innerHTML) + n
  }
}

function deepestChild(){

return document.getElementById("grand-node").querySelectorAll("div")[3]
  }
