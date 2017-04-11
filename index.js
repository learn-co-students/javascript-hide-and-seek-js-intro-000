function getFirstSelector(selector){
  var a= document.querySelector(selector)
  return a
};

function nestedTarget(){
  //var nested=document.getElementById('nested');
  //var target=document.getElementsByClassName('target');
  //nested.remove(target)

  document.getElementById('nested').remove(document.getElementsByClassName('target'))
}

function increaseRankBy(n){
  var rankedList=document.getElementsByClassName('ranked-list');
  for(let i=0;i<rankedList.length;i++){
    rankedList[i].innerHTML=(parseInt(rankedList[i])+n).toString()
  }
}

function deepestChild(){
  var divs=document.getElementById('grand-node').querySelectorAll('div');
  for(let i=0; i<divs.length; i++){

    return divs[divs.length-1]
  }
}
