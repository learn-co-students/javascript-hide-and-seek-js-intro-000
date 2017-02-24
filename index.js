
function getFirstSelector(selector){
  return document.querySelector(selector);
}

function nestedTarget(){
  return document.querySelector('#nested .target')
}

function deepestChild(){
  var current = document.querySelector("#grand-node");
  while(current.querySelector("div") != null)
    current = current.querySelector("div")
  return current;
}

  function increaseRankBy(n){
    // Get a list of elements that are "#example li"
    var elem = document.getElementsByClassName("ranked-list");
    var size = Object.keys(elem).length;
    for	(var i=0; i<size; i++){
   //elem[i].querySelector("LI").innerHTML = parseInt(elem[i].querySelector("LI").innerHTML, 10)+1
     var lenght = elem[i].children.length;
     for(var j=0;j<lenght;j++){
       debugger;
        elem[i].children[j].innerHTML = parseInt(elem[i].children[j].innerHTML)+n
     }
   }
  }
