function getFirstSelector(selector){
  var f = document.querySelector(selector);
  return f;
}

function nestedTarget(){
  var j = document.getElementById('nested').querySelector('div.target');
  return j;
}

function increaseRankBy(n){
  var scores = document.getElementById('app').querySelectorAll('ul.ranked-list li');
  for (let i = 0; i<scores.length; i++){
    var g = parseInt(scores[i].innerHTML, 10);
    scores[i].innerHTML = g+n;
  }
}


function deepestChild(){
  var p = document.querySelector('#grand-node div div div div');
  return p;
}