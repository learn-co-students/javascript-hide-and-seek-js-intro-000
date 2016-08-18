function getFirstSelector(selector) {
	// body...
    return document.querySelector(selector);
};

function nestedTarget() {
	// body...
  return document.querySelector('#nested .target');
};



function increaseRankBy(n) {
  const rankedLists = document.querySelectorAll('.ranked-list')
     
  for (let i = 0, l = rankedLists.length; i < l; i++) {
    let children = rankedLists[i].children

    for (let j = 0, k = children.length; j < k; j++) {
      children[j].innerHTML = parseInt(children[j].innerHTML) + n
    }
  }
};


//Returns the most deeply nested child in #grand-node
function deepestChild() {
	// body...
    let node = document.getElementById('grand-node');
    let next = node.children[0];
    
    while(next){
      node = next;
      next = node.children[0];
    };

    return node;
};