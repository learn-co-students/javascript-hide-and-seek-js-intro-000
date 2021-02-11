
function getFirstSelector(selector) {
  return document.querySelector(selector);
}


function nestedTarget() {
  return document.querySelector('#nested .target');
}


function deepestChild() {
  const item = document.querySelector('#grand-node div div div div')
  return item;
}


function increaseRankBy(n) {
  var list = document.querySelectorAll('.ranked-list li')

  for (let i = 0; i < list.length; i++) {
    var item = parseInt(list[i].innerHTML, 10);
    var changedItem = (item + n);
    list[i].innerHTML = changedItem.toString();
  }
  return list;
}
