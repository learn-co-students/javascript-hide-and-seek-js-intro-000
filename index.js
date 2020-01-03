// Define a function getFirstSelector(selector),
// which accepts a selector and returns the first element that matches

function getFirstSelector(selector) {

    return document.querySelector(selector);
}

function nestedTarget() {
  return document.querySelector('#nested .target');
}


function deepestChild() {
  return document.querySelector('#grand-node div div div div');
}


function increaseRankBy(n) {
  const elms = document.querySelectorAll('.ranked-list li');
  for (let i=0; i<elms.length; i++) {
    elms[i].innerHTML = parseInt(elms[i].innerHTML)+n;
  }
}
