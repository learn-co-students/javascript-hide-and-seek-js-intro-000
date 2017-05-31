function getFirstSelector(selector) {
  return document.querySelector(selector);
}

function nestedTarget() {
  return document.getElementById('nested').querySelector('.target')
}

function increaseRankBy(n) {

  const theList = document.getElementById('app').querySelectorAll('ul.ranked-list li');

  for (let i = 0; i < theList.length; i++) {
    theList[i].innerHTML = (parseInt(theList[i].innerHTML) + n).toString();
  }
}

function deepestChild() {
  var theChildren = document.getElementById('grand-node').querySelectorAll('div');
  return theChildren[theChildren.length - 1];
}
