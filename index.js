function getFirstSelector(selector) {
  return $(selector)[0]
}

function nestedTarget() {
  return $(#nested .target)[0]
}

function increaseByRank(n) {
  var rankedLis = document.querySelectorAll('li');

  for (var i = 0; i < rankedLis.length; i++) {
      rankedLis[i].innerHTML = Number(rankedLis[i].innerHTML)+Number(n)
  }
}

function deepestChild() {
  var select = 'div#grand-node';
  var node;
  while (node !== null) {
    select +=  ' div';
    node = document.querySelector(select);
  }
  return node
}
