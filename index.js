// Define a function getFirstSelector(selector), which accepts a selector and returns the first element that matches.
// 1) index getFirstSelector(selector) returns the first element that m

function getFirstSelector(selector) {
  return document.querySelector(selector)
}


// Define a function nestedTarget() that pulls a .target out of #nested (# is used for IDs in selectors
// — but you knew that because you read the docs, right? :) ).
// (Note that in index.html #nested and .target just happen to be divs.
// This method should work with arbitrary elements.)
//   2) index nestedTarget() pulls a .target out of #nested:

function nestedTarget() {
  return document.querySelector('#nested .target')
}


// Define a function deepestChild() that pulls out the most deeply nested child from div#grand-node.
// (Remember, you can iterate over elements and call querySelector() and querySelectorAll() on them.
//  3) index deepestChild() returns the most deeply nested child in #gra

function deepestChild() {
  let node = document.getElementById('grand-node')
  let nextNode = node.children[0]

  while (nextNode) {
    node = nextNode
    nextNode = node.children[0]
  }

  return node
}


// Define a function increaseRankBy(n) that increases the ranks in all of the .ranked-lists by n.
// (You might need to make use of parseInt()
// 4) index increaseRankBy(n) increases ranks in .ranked-list by n:

function increaseRankBy(n) {
  const rankedLists = document.querySelectorAll('.ranked-list')

  for (let i = 0, len = rankedLists.length; i < len; i++) {
    let children = rankedLists[i].children

    for (let j = 0, k = children.length; j < k; j++) {
      children[j].innerHTML = parseInt(children[j].innerHTML) + n
    }
  }
}
