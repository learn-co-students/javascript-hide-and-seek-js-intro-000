function getFirstSelector(selector) {
  return document.querySelector(selector)
}

// Define a function getFirstSelector(selector), which accepts a
// selector and returns the first element that matches.

// Define a function nestedTarget() that pulls a .target out of #nested
//  (# is used for IDs in selectors — but you knew that because you read the docs,
//     right? :) ). (Note that in index.html #nested and .target just happen to be divs.
//        This method should work with arbitrary elements.
function nestedTarget () {
  return document.querySelector('#nested .target')
}

 // Define a function increaseRankBy(n) that increases the
 // ranks in all of the .ranked-lists by n. (You might need to make use of parseInt()


   function increaseRankBy(n) {
  var rankedLists = document.querySelectorAll('.ranked-list')

  for (var i = 0; i < rankedLists.length; i++) {
    var children = rankedLists[i].children

    for (var j = 0; j < children.length; j++) {
      children[j].innerHTML = parseInt(children[j].innerHTML) + n;
    }
  }
}


function deepestChild() {
  var node = document.getElementById('grand-node')
  var next = node.children[0]

  while (next) {
    node = next;
    next = node.children[0]
  }

  return node;
}
