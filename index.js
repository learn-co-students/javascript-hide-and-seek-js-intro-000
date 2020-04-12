function getFirstSelector(selector) {
  return document.querySelector(selector);
}

function nestedTarget(){
  return document.querySelector('#nested .target');
}

function deepestChild() {
  let nodes = document.querySelectorAll('#grand-node div');
  return nodes[nodes.length - 1];
}

function increaseRankBy(n) {
  let ranks = document.querySelectorAll('.ranked-list');
  for(let i = 0; i < ranks.length; i++) {
    let rank = ranks[i];
    console.log(`${rank.innerHTML} ------->`)

    let children = rank.children;
    for(let j = 0; j < children.length; j++) {
      let child = children[j];

      console.log(`${child.textContent} ------->`)
      child.innerHTML = parseInt(child.textContent) + n;
    }

  }
}

/* function increaseRankBy(n) {
  let ranks = document.querySelectorAll('ul.ranked-list li');
  for (let i = 0; i < ranks.length; i++) {
    ranks[i].innerHTML = parseInt(ranks[i].innerHTML) + n
  }
}*/
