function getFirstSelector(selector) {
  return document.querySelector(selector)
}

function nestedTarget() {
  return document.getElementById('nested').querySelector('div.target')
}

function increaseRankBy(n) {
  var rankedLists = document.querySelectorAll('.ranked-list')
  for (let i = 0; i <rankedLists.length; i++) {
    rankedLists[i].innerHTML = parseInt(rankedLists[i].innerHTML) + n
  }
}

//Check if the array contains an element that is an array.
//If yes, chuck out each element that is not an array. For each array element, keep child.
//If no, return all remaining elements in the array.

//If main has no child, return main.
function deepestChild() {
  let current = document.getElementById('grand-node')
  while (current.children[0].children[0] != undefined) {
    current = current.children[0]
  }
  return current.children[0]
}


  /*
  while (current.some(Array.isArray) || next != []) {
    if (current.some(Array.isArray)) {
      for (let i = 0; i < current.length; i++) {
        if (Array.isArray(current[i])) {
          next.push(current[i])
      }
    }
  }
    current = next.shift()

  }
}
*/
