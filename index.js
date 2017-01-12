function getFirstSelector(selector){
  return document.querySelector(selector);
}

function nestedTarget(){
  return document.querySelector('div#nested div.target');
}

function increaseRankBy(n){
  var lis = document.querySelectorAll('.ranked-list li')
  for (var i = 0; i < lis.length; i++){
    lis[i].innerHTML = Number(lis[i].innerHTML) + Number(n);
  }
}

function deepestChild(){
  var nodeList = document.querySelectorAll('div#grand-node');
  var index = 0;
  var current = nodeList[0];

//return current[0].children.length 
while (nodeList[index]){
   current = nodeList[index]
   index++; 
}

return current

/*while (lis.length > 1){
    if (lis.length === 5) {
      return lis
    }
    else {
      string += ' div'
    }*/
}


