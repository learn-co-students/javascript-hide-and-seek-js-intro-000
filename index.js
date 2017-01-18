function getFirstSelector(selector) {
  return document.querySelector(selector)
}

function nestedTarget () {
return document.getElementById('nested').querySelector('div.target');
}

function increaseRankBy (n) {
  const lis = document.querySelectorAll('.ranked-list')

  for (let i = 0, l = lis.length; i < l; i++) {
    lis[i].innerHTML = (i + n).toString()
  }
  return lis;
}

function deepestChild () {
var list = document.getElementById('grand-node');
var next = list;

while(next.length) {
  var list = next;
  var next = next.childen;
}
return next;
}
