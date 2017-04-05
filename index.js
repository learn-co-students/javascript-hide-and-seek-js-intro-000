function getFirstSelector(selector){
  return document.querySelector(selector);
}

function nestedTarget(){
  return document.querySelector('#nested .target');
}

function increaseRankBy(n){
  var a = document.querySelectorAll('.ranked-list');
  for(var i=0;i<a.length;i++){
    a[i].innerHTML = parseInt(a[i].innerHTML) + n;
  }
}

function deepestChild(){

  function dig(node,depth){
    //returns node,depth

    var children = node.children;

    if(node.children.length===0){
      return ([node,depth]);
    }

    else{
      var deepest = [node,0];
      for(var i=0;i<children.length;i++){
        var childArray = dig(children[i],depth+1);
        if(childArray[1]>deepest[1]){
          deepest = childArray;
        }
      }
      return deepest;
    }
  }
  var deepestTup = dig(document.querySelector('div#grand-node'),0);
  return deepestTup[0];
}
