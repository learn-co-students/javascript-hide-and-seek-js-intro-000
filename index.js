function getFirstSelector(selector){
  return document.querySelector(`${selector}`);
}

function nestedTarget(){
  return document.getElementById('nested').querySelectorAll('.target');
}

function increaseRankBy(n){
  var rankedLists = document.getElementsByClassName('ranked-list');
  var listItems = [];
  for (let i = 0; i < rankedLists.length; i++){
    listItems.push(rankedLists[i].querySelectorAll('li'));
  }
  for (let i = 0; i < listItems.length; i++){
    var nodeList = listItems[i];
    for (let i =0; i< nodeList.length; i++){
      var textNode = nodeList[i];
      var text = textNode.innerHTML;
      console.log(text);
      var num = parseInt(text);
      console.log(num + 1);
      textNode.innerHTML = num + n;
    }
  }
}

function deepestChild(){
  let deepestDiv;
  const theseDivs = document.getElementById('grand-node').querySelectorAll('div');

  for (var i = 0; i < theseDivs.length; i++) {
    deepestDiv = theseDivs[i];
}
return deepestDiv;
}
