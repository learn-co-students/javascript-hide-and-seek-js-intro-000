// Define a function getFirstSelector(selector), which accepts a selector and
// returns the first element that matches.
function getFirstSelector(selector) {
  return document.querySelector(selector);
}


// Define a function nestedTarget() that pulls a .target out of #nested
// (# is used for IDs in selectors — but you knew that because you read the
// docs, right? :) ). (Note that in index.html #nested and .target just happen
// to be divs. This method should work with arbitrary elements.)
function nestedTarget() {
  return document.querySelector('#nested .target');
}

// Define a function increaseRankBy(n) that increases the ranks in all of the
// .ranked-lists by n. (You might need to make use of parseInt()
function increaseRankBy(n) {
  var rankedLists = document.querySelectorAll('ul.ranked-list');
  if (rankedLists) {
    var rankedListsLength = rankedLists.length;
    for (var i = 0; i < rankedListsLength; i++) {
      var list = rankedLists[i].querySelectorAll('li');
      var listLength = list.length;
      for (var j = 0; j < listLength; j++) {
        var value = parseInt(list[j].innerHTML);
        value += parseInt(n);
        list[j].innerHTML = value;
      }
    }
  }
}

// Define a function deepestChild() that pulls out the most deeply nested
// child element from div#grand-node. (Remember, you can iterate over elements
// and call querySelector() and querySelectorAll() on them. This is challenging
// to implement correctly, but not beyond your ability!)
// HINT 1: Your solution for deepestChild() does not need to be totally generic;
// we don't expect it to work in every case. For example, we know that
// div#grand-node has only one node at each level — for this lab, you can s
// olve for that case, and not worry about a case where there are sibling nodes.

function deepestChild() {
  var current = document.querySelector('#grand-node').firstElementChild;
  var next;
  while (current.firstElementChild) {
    next = current.firstElementChild;
    current = next;
  }
  return current;
}
