var getFirstSelector = (selector) => {
  return document.querySelector(selector);
}

var nestedTarget = () => {
  return document.querySelector("#nested .target");
}

var deepestChild = () => {
  let node = document.querySelectorAll('#grand-node');
  return node[node.length-1];
}

var increaseRankBy = (n) => {
  const rankedLists = document.querySelectorAll('.ranked-list');

  for(let i = 0; i<rankedLists.length; i++){
    let children = rankedLists[i].children;

    for(let j = 0; j<children.length; j++){
      children[j].innerHTML = parseInt(children[j].innerHTML) + n
    }
  }

}
