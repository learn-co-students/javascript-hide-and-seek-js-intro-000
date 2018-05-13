function getFirstSelector(selector) {
  return document.querySelector(selector);
}

function nestedTarget() {
  return document.querySelector('#nested .target');
}

function deepestChild() {
  return document.querySelector('#grand-node div div div div');
}

function increaseRankBy(n) {
  const rankList = document.querySelectorAll('.ranked-list li')
  for(var i = 0; i < rankList.length; i++){
    rankList[i].innerHTML = parseInt(rankList[i].innerHTML) + n;
  }
}
