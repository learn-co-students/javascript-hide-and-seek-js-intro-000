function getFirstSelector(selector) {
  var theElement = document.querySelector(selector);
  return theElement;
}

function nestedTarget() {
//  var anElement = document.getElementById(nested);
  return document.querySelector('div#nested');
}

function deepestChild() {
  var theElement = document.querySelector('div#grand-node');
  var current = theElement;
  var next = current.querySelector('div');
  while (next != null) {
    current = next;
    next = next.querySelector('div');
  }
  return current;
}

function increaseRankBy(n) {
  var theElements = document.querySelectorAll('ul.ranked-list');
  for (let i = 0; i < theElements.length; i++) {
    theElements[i].innerHTML = parseInt(n) + parseInt(theElements[i].innerHTML);
  }
  return theElements;
}
