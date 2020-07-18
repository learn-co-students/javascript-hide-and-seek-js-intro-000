function getFirstSelector(selector){
  var internal = document.querySelector(selector);
  return internal;
}

function nestedTarget(){
  var internal = document.querySelector("#nested .target");
  return internal;
}

function deepestChild(){
  // instructions say to not worry about the general case.
  var internal;
  var trigger = 0;
  var tree = document.querySelector("#grand-node");
  var branch = tree;

  while(trigger === 0){
    if (branch.children[0] === undefined){
      trigger = 1;
    }
    else{
      branch = branch.children[0];
      internal = branch;
    }
  }

  return internal;
}

function increaseRankBy(n){
  var internal = document.querySelectorAll(".ranked-list li");
  // querySelectorAll returns a "NodeList", not an array.
  /*internal.forEach(element => {
    element.innerHTML = parseInt(element.innerHTML) + n;
  })*/
  // says "internal.forEach is not a function", but NodeList also has forEach.

  for (var i = 0; i < internal.length; i++){
    internal[i].innerHTML = parseInt(internal[i].innerHTML) + n;
  }
}
