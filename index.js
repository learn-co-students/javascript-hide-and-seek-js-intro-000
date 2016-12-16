function getFirstSelector(selector){
return document.querySelector(selector);
}

function nestedTarget(){
  return document.querySelector('div#nested div.target')
}
function increaseRankBy(n) {
  var ranks = document.querySelectorAll('ul.ranked-list');
  for(let i = 0; i<ranks.length; i++){
    ranks[i].innerHTML = parseInt(ranks[i]) + n;
  }  
}
function deepestChild(){
  var nodes = document.querySelectorAll('div#grand-node');
  for(var i = 0; i<nodes.length; i++){
    if(i<nodes.length-1){
      continue;
    }
    else{
      return nodes[i];
    }
  }
}