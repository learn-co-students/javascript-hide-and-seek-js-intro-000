function getFirstSelector(selector) {
  //const ???? for all fn's
  return document.querySelector(selector);
}

function nestedTarget() {
  return document.getElementById('nested').querySelector('.target')
}

function increaseRankBy(n) {
  var lis = document.getElementById('app').querySelectorAll('ul.ranked-list li')
  
  for (let i = 0, l = lis.length; i < l; i++) {
    lis[i].innerHTML = ((parseInt(lis[i].innerHTML)) + n).toString();
  }
}

function deepestChild() {
  var nod1 = document.getElementById('grand-node');
  var nod2 = nod1;
  while(nod1) {
    nod2 = nod1;
    nod1 = nod1.querySelector('div');
  }
  return nod2;
}