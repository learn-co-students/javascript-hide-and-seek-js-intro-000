function getFirstSelector(selector){
  return document.querySelector(selector)
}

function nestedTarget(){
  return document.querySelector('#nested .target') //only works if using quotations
}


function increaseRankBy(n){
  var pulledRanks = document.querySelectorAll('.ranked-list')   // first pull up all the ranks
  for (let i = 0; i < pulledRanks.length; i++){ //iterate nodeList into new variable
    let newRanks = pulledRanks[i].children
    for (let j = 0; j < newRanks.length; j++) { //iterate each element, adding n
      newRanks[j].innerHTML = parseInt(newRanks[j].innerHTML) + n
    }
  }
}

function deepestChild() {
  let node = document.getElementById('grand-node') // pull up the div with id "grand-node"
  let nextNode = node.children[0] //let nextNode be the child

  while (nextNode) { // use a while loop that pushes the next node up as the new "node"
    node = nextNode     // and then grabs the next node (children)
    nextNode = node.children[0] // loop stops when there are no more children
  }
  return node
}
