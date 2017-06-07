function getFirstSelector(selector) {
  return document.querySelector(selector);
};

function nestedTarget() {
  return document.querySelector("#nested .target");
};

function increaseRankBy(n)  {
  const x = document.querySelectorAll("ul.ranked-list li");
  for (var i = 0; i < x.length; i++) {
    var sum = parseInt(x[i].innerHTML, 10) + n;
    x[i].innerHTML = sum;
  }
};

function deepestChild() {
  var i = 0;
  const getAll = document.querySelector('div#grand-node').querySelectorAll('div');
  while(i < getAll.length)  {
    var getDeepest = getAll[i];
    i++;
  }
  return getDeepest;
};
