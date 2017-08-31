function getFirstSelector(selector) {
  var selector = document.querySelector(selector);
  return selector;
}

function nestedTarget() {
  var target = document.querySelector('div#nested div div div div.target');
  return target;
}

function deepestChild() {
  var grandNode = document.querySelector('div#grand-node div div div div');
  return grandNode;
}

function increaseRankBy(n) {
  var rankItems = document.querySelectorAll('ul.ranked-list li');
  for(var i = 0; i < rankItems.length; i++) {
    rankItems[i].innerHTML = parseInt(rankItems[i].innerHTML) + n;
  }
}
