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
    .getElementByID("app")
    .querySelectorAll("ul.ranked-list li");
    
  for (let i = 0; i < a.length; i++) {
    a[i].innerHTML = parseInt(a[i].innerHTML) + n;
  }
}

function deepestChild() {
  let a = document
    .getElementByID("grand-node")
    .querySelector("div.grand-node div div div div");
  return a;
}  
