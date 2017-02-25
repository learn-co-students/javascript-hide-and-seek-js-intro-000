function getFirstSelector(selector) {
  const kek1 =  document.querySelector(selector);
  return kek1;
}
function nestedTarget() {
  const kek2 = document.querySelector('div#nested div.target');
  return kek2;
}
function deepestChild() {
  const list = document.getElementById('grand-node').querySelectorAll('div');
  return list[list.length - 1];
}
function increaseRankBy(n) {
  var list = document.getElementById('app').querySelectorAll('ul.ranked-list li');
    for (var i = 0; i < list.length; i++) {
      var num = parseInt(list[i].innerHTML);
      num += n;
      list[i].innerHTML = num;
    }
  
}