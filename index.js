function getFirstSelector(selector) {
  return document.querySelector(selector);
}
function nestedTarget() {
  return  document.querySelector('#nested .target');
}
function increaseRankBy(n) {
  const lis = document.querySelectorAll('ul.ranked-list li');
  for(var i = 0, l = lis.length; l > i; i++) {
    lis[i].innerHTML = parseInt(lis[i].innerHTML) + n;
  }
}
function deepestChild() {
  var arrayInner = [];
  var grandInner = document.querySelectorAll('#grand-node div')
  for(var i = 0, l = grandInner.length; i < l; i++) {
  arrayInner.push(grandInner[i]);
  }
  return arrayInner[arrayInner.length - 1];
}
