function getFirstSelector(selector) {
  return document.querySelector(selector);
}
//passed
function nestedTarget() {
  return document.querySelector('#nested .target');
}
//passed
function increaseRankBy(n) {
  const list = document.querySelectorAll('ul.ranked-list li')
  for (var i = 0; i < list.length; i++) {
      list[i].innerHTML = parseInt(list[i].innerHTML) + n;
    }
}
//passed
function deepestChild() {
  let deepest = document.getElementById('grand-node').querySelectorAll('div')
  return deepest[deepest.length-1];
}
