function getFirstSelector(selector) {
  return document.querySelector(selector)

}

function nestedTarget() {
  return document.querySelector('#nested .target')

}

function increaseRankBy(n) {
  let rankedLists = document.querySelectorAll('.ranked-list')

  for (var i = 0; i < rankedLists.length; i++) {
    for (var j = 0; j < rankedLists[i].children.length; j++) {
      rankedLists[i].children[j].innerHTML = parseInt(rankedLists[i].children[j].innerHTML) +n
    }
  }
}

function deepestChild() {

  let tree = document.querySelector('div#grand-node')

  let current = tree

  let prev = current

  while (current){

    prev = current
    current = current.children[0]

  }

  return prev

}
