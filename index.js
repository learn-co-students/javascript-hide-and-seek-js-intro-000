function getFirstSelector(selector){
  /*Finds then return the first match to "selector" in the document.*/
  const match = document.querySelector(selector);
  return match;
}

function nestedTarget(){
  /*Finds then returns specifically #nested.target from the document.
  This could be made more generic by passing the ID (#nested) and the selector
  (.target) to the function.*/
  const hit = document.querySelector('#nested .target');
  return hit;
}

function increaseRankBy(n){
  const list =
  document.getElementById('app').querySelectorAll('.ranked-list');
  /*This is a list of everything in the .ranked-list hierarchy*/
  for (let i = 0, l = list.length; i < l; i++){
    list[i].innerHTML = (parseInt(list[i].innerHTML, 10) + n).toString()
    /*...that we then parse and jump up the innerHTML by n. This assumes that
    we're working with something like a <ol> tag where there will be numbers
    to work with. It's also specific to selectors called ".ranked-list"
    in an ID called 'app'.*/
  }
  return null; //Cuz it oughta return something that's mostly harmeless.
}

function deepestChild(){
  /*Returns a document.whatever form that will be prepended to .innerHTMLto
  produce the text during the test.*/
  var depth = "#grand-node";
  var deepChild = document.querySelector(depth);
  for (let i = 0; i < 10; i++){
    var newDepth = depth + " div";
    var newDeepChild = document.querySelector(newDepth);
    if (newDeepChild != null){
      depth = newDepth;
      deepChild = document.querySelector(depth)
    }
    else {
      break;
    }
  }
  return deepChild;
}
