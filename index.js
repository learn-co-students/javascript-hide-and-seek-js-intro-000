// index getFirstSelector(selector) returns the first element that matches the selector
function getFirstSelector(selector) {
  return document.querySelector(selector);
}

// index nestedTarget() pulls a .target out of #nested
function nestedTarget() {
  return document.querySelector("#nested .target");
}

// index deepestChild() returns the most deeply nested child in #grand-node
function deepestChild() {
  let list = document.getElementById('grand-node').querySelectorAll('div'); 
  return list[list.length - 1];
}

// index increaseRankBy(n) increases ranks in .ranked-list by n
function increaseRankBy(n) {
  let list = document.getElementById('app').querySelectorAll('ul.ranked-list li'); 
  for(let i = 0; i < list.length; i++) {
    let num = parseInt(list[i].innerHTML); 
    num += n; 
    list[i].innerHTML = num; 
  }
}