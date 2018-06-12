function getFirstSelector(selector){
  return document.querySelector(selector);
}

function nestedTarget() {
  return document.getElementById('nested').querySelector('div.target');
}

function increaseRankBy(n) {
  const lis = document.querySelectorAll('ul.ranked-list li');

  for (var i = 0; i < lis.length; i++){
    lis[i].innerHTML = parseInt(lis[i].innerHTML) + n;
  }
}

function deepestChild() {
  const deep = document.getElementById('grand-node').querySelectorAll('div');
  return deep[deep.length-1];
}
