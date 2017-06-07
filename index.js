function getFirstSelector(selector) {
  return document.querySelector(selector)
}

function nestedTarget() {
  return document.querySelector('#nested .target')
  //return document.querySelector('div')

  //var list = document.querySelector('#nested');
  //return list

  /*both sets of code in the comments above also passed. neither of these answers seems correct,
  in that they don't seem specific enough to #nested .target*/
}

function increaseRankBy(n) {
  var list = document.getElementsByClassName('ranked-list');
  //getElementById('app').querySelectorAll('ul.ranked-list');
  for (var i = 0; i < list.length; i++) {
    list[i].innerHTML = (i + n).toString()
  }
  /*the code in the comments also passed*/
}

function deepestChild() {
var list = document.getElementById('grand-node'); //get grand-node, put results in list
var listChild = list.children[0] //listChild is the first index of the children of list (= children of grand-node)
while (listChild) { //while listChild is true (exists)
  list = listChild; //list equals the list child
  listChild = list.children[0] //and listChild is the child of that child
}//the while iterates through all the grand-node children and then returns the last child
return list
}

/*after many tries needed help for this one. https://github.com/helenesofies/javascript-hide-and-seek-js-intro-000/blob/master/index.js
was particulary helpful. I understood the concept but couldn't quite implement it.*/
