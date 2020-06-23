function getFirstSelector(selector){
  return document.querySelector(selector)
}

function nestedTarget(){
  return document.querySelector("#nested .target")
  }

  function deepestChild(){
    return document.querySelector("#grand-node div div div div")
  }

  function increaseRankBy(n){
    const rList=document.querySelectorAll(".ranked-list li")
    for (let i=0;i<rList.length;i++){
      rList[i].innerHTML=parseInt(rList[i].innerHTML)+n
    }
  }
