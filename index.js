  function getFirstSelector(selector) {
   return document.querySelector(selector);
  }

function nestedTarget() {
  return document.querySelector('.target');
}


function increaseRankBy(n) {
var lists = document.querySelectorAll('.ranked-list');  //first find all nodes that share this class
  for (let i = 0; i < lists.length; i++) {
       var ranks = lists[i]              //these are nodes within each list
     for (let j = 0; j < ranks.length; j++) {  // ranks[j] are the elements that get increased by n -
        ranks[j].innerHTML = (parseInt(ranks[j].innerHTML)) + n;  // change string value to integer and add n
}
}
}

function deepestChild() {
  let thisDiv = document.getElementById('grand-node');
  let nextDiv = thisDiv.children[0];  //find the nextDiv down
  // As long as there is a nextDiv, this keeps going one level deeper
  while (nextDiv) {
  thisDiv = nextDiv;
  nextDiv = thisDiv.children[0]; // if no more nextDiv, thisDiv is the deepestChild
 }
 return thisDiv; // returns <div> Boo! </div>
 }
