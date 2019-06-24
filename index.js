
function getFirstSelector(selector) {
   return document.querySelector(selector);
}

function nestedTarget() {
  return document.querySelector('#nested .target');
}

function increaseRankBy(n) {
  const lis = document.querySelectorAll('#app ul.ranked-list li');
  for (var i = 0; i < lis.length; i++){
    var li = lis[i];
    var rank = parseInt(li.innerHTML, 10) + n;
    li.innerHTML = rank.toString();
  }
}

function deepestChild() {
  const divs = document.getElementById('grand-node').querySelectorAll(div);
  for (var i = 0; i < divs.length; i++) {
    if (lis[i] = divs.length-1) {
      return lis[i].innerHTML;
    }
  }
}
