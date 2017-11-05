function getFirstSelector(selector){
  return document.querySelector(selector);
}


function  nestedTarget(){

  return document.querySelector('#nested .target');
}


function deepestChild(){
  return document.querySelector('#grand-node div div div div');

}


function increaseRankBy(n){
    var rankedLists=document.querySelectorAll(".ranked-list");
    for(let i=0;i<rankedLists.length;i++){
      var list=rankedLists[i];
      var elements=list.querySelectorAll('li');
      for(let j=0; j<elements.length;j++){
        elements[j].innerHTML=parseInt(elements[j].innerHTML)+n;

      }

    }
}
