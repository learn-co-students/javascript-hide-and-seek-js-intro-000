function getFirstSelector(selector) {
  return document.querySelector(selector);
}

function nestedTarget() {
  return document.querySelector('#nested .target');
}

function increaseRankBy(n) {
  const lis=document.querySelectorAll('ul.ranked-list li');
  for (var i=0, l=lis.length; i<l; i++) {
    var lisVal = parseInt(lis[i].innerHTML);
    lis[i].innerHTML=lisVal+n;
  }
}

function deepestChild() {
  const divs=document.querySelectorAll('div#grand-node div');
  return divs[divs.length-1];
}
