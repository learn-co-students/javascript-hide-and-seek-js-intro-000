function getFirstSelector(selector) {
  return document.querySelector(selector);
}

function nestedTarget() {
  return document.querySelector('#nested .target');
}

function deepestChild() {
  var parentElement = document.getElementById('grand-node');
  var childElement = parentElement.children[0];

  while (childElement) {
    parentElement = childElement;
    childElement = parentElement.children[0];
  }

  return parentElement;
}

function increaseRankBy(n) {
  const rankedLists = document.querySelectorAll('.ranked-list')

  for (var i = 0;i < rankedLists.length;i++) {
    var childElements = rankedLists[i].children;

    for (var l = 0;l < childElements.length;l++) {
      childElements[l].innerHTML = parseInt(childElements[l].innerHTML) + n
    }
  }
}
