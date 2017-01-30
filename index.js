function getFirstSelector(selector) {
  return document.querySelector(selector);
}

function nestedTarget() {
  return document.getElementById('nested').querySelector('div.target');
}

function increaseRankBy(n) {
  const lis = document.getElementById('app').querySelectorAll('ul.ranked-list li');

  for (let i = 0, l = lis.length; i < l; i++) {
  var num = parseInt(lis[i].innerHTML);
  lis[i].innerHTML = (num + n).toString()
  }

  return lis;
}

function deepestChild() {
  var list = document.getElementById('grand-node').querySelectorAll('div');
  var ans;

  for (var i = 0; i < list.length; i++) {
    var curChild = list[i];
  }

  return curChild;
}
