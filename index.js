function getFirstSelector(selector){
  return document.querySelector(selector);
}

function nestedTarget(){
  const nestedElementId = document.getElementById('nested');
  return nestedElementId.getElementsByClassName('target')[0];
}

function deepestChild(){
  const grandNodeSubTree = document.querySelectorAll('#grand-node div');

  return grandNodeSubTree[grandNodeSubTree.length-1];
}

function increaseRankBy(n){
  var rankedLists = document.querySelectorAll('.ranked-list li');
  for (var i= 0; i < rankedLists.length; i++){
    rankedLists[i].innerHTML =  parseInt(rankedLists[i].innerHTML) + n;
  }
}
