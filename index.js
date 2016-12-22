function getFirstSelector(selector){
  return document.querySelector(selector);
}

function nestedTarget(){
  return document.querySelector('#nested .target');
}

function increaseRankBy(n){
  var list = document.querySelectorAll('.ranked-list li');
  for (var i = 0; i < list.length; i++) {
    var num = parseInt(list[i].innerHTML);
    var newValue = num + n;
    list[i].innerHTML = newValue;
  }
}

function deepestChild(){
  var childDiv = document.getElementById('grand-node');
  var child = childDiv.children[0];
  while(child){
    childDiv = child
    child = childDiv.children[0]
  }
  return childDiv;
}
