function getFirstSelector(selector) {
  return document.querySelector(selector);
}

function nestedTarget() {
  return document.getElementById('nested').querySelector('.target') 
}

function increaseRankBy(num) {
  const elms = document.querySelectorAll('.ranked-list li');
  for (let i=0; i<elms.length; i++) {
    elms[i].innerHTML = parseInt(elms[i].innerHTML)+num;
  }
}

// Return the first node which do not have children (deepest)
// It is known that each node has at most one child
function findNodeWithNoChild(elm) {
  if (elm.children.length === 0) {
    return elm;
  } 
  else {
    return findNodeWithNoChild(elm.children[0]);   // It is correct
  }
}

function deepestChild() {
  return findNodeWithNoChild(document.getElementById('grand-node'));
}