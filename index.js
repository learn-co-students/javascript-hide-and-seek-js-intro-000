/*
Define a function getFirstSelector(selector), which accepts a selector and returns the first element that matches.
*/
function getFirstSelector(selector) {
  return document.querySelector(selector)
}
/*
Define a function nestedTarget() that pulls a .target out of #nested (# is used for IDs in selectors — but you knew that because you read the docs, right? :) ). (Note that in index.html #nested and .target just happen to be divs. This method should work with arbitrary elements.)
*/
function nestedTarget() {
  return document.querySelector("#nested .target")
}
/*
Define a function increaseRankBy(n) that increases the ranks in all of the .ranked-lists by n. (You might need to make use of parseInt()
*/
function increaseRankBy(n) {
  let rankedLists = document.querySelectorAll(".ranked-list")
  for (let i = 0; i < rankedLists.length; i++) {
    let children = rankedLists[i].children
    for (let j = 0; j < children.length; j++) {
      children[j].innerHTML = parseInt(children[j].innerHTML)+n
    }
  }
}
/*
Define a function deepestChild() that pulls out the most deeply nested child from div#grand-node. (Remember, you can iterate over elements and call querySelector() and querySelectorAll() on them. This is challenging to implement correctly, but not beyond your ability!)
*/
function deepestChild() {
  let root = document.querySelector("div#grand-node")
  var parent = root
  var child = root.children[0]
  while (child) {
    parent = child
    child = child.children[0]
  }
  return parent
}
/*
HINT 1: Your solution for deepestChild() does not need to be totally
generic; we don't expect it to work in every case. For example, we know that
div#grand-node has only one node at each level — for this lab, you can solve
for that case, and not worry about a case where there are sibling nodes.
HINT: Remember learning about breadth-first search? A similar technique
might come in handy here.
Have fun, and good luck!
*/
