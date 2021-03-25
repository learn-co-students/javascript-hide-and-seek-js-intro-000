function getFirstSelector(selector) {
  let a = document.querySelector(selector)
  return a;
}

function nestedTarget() {
  let b = document.querySelector("div.target");
  return b;
}

function increaseRankBy(n) {
  let a = document
    .querySelectorAll("ul.ranked-list li");
    
  for (let i = 0; i < a.length; i++) {
    a[i].innerHTML = parseInt(a[i].innerHTML) + n;
  }
}

function deepestChild() {
  let a = document.getElementById('grand-node')
  let nextNode = a.children[0];
    while (nextNode) {
      a = nextNode;
      nextNode = a.children[0];
    }
  return a;
}  
