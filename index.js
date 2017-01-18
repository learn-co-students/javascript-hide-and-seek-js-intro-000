function getFirstSelector(selector){
  return document.querySelector(selector);
}

function nestedTarget(){
  return document.getElementById("nested").getElementsByClassName("target")[0];
}

function deepestChild(){
   return document.querySelector("div#grand-node div div div div");

}


function increaseRankBy(n){
  let nodeList=document.querySelectorAll(".ranked-list li");
          for(let i=0;i<nodeList.length;i++){
          nodeList[i].innerText= parseInt(nodeList[i].innerText)+parseInt(n);
          window.alert(nodeList[i].innerText);
          }




}
