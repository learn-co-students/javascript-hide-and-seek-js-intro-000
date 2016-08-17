function getFirstSelector(selector){
  return document.querySelector(selector);
}

function nestedTarget(){
 //var thisID = document.getElementById("nested").getElementsByClassName("target")[0];
 return document.querySelector("#nested").querySelector(".target");
}

function increaseRankBy(n){
  var ranks = document.getElementById("app").querySelectorAll("ul.ranked-list li");
  for(var i = 0; i < ranks.length; i++){
    var num = parseInt(ranks[i].innerHTML);
    ranks[i].innerHTML = (num+ n);
  }
}

function deepestChild(){
  var myNodes = document.querySelector("#grand-node").querySelectorAll("div");
  for(var i = 0; i < myNodes.length; i++){
    if (i === (myNodes.length-1)){
      return myNodes[i];
    }
  }
}
//document.getElementsByTagName("p");
//returns all p tags on a page

// alternatively, we could do
//document.querySelectorAll('p');

// the results of these two functions
// are the same in this example, but as
// we'll see later, getElementsByTagName
// and querySelectorAll have different uses
//document.getElementsByTagName('div')
//const li2 = document.querySelector('ul.ranked-list li ul li')
