function getFirstSelector(selector) {
  var firstelement = document.querySelector(selector);
  return firstelement;
}

function nestedTarget() {
  var viewtarget = document.querySelector('main#app div#nested div.target');
  return viewtarget;
}

function increaseRankBy(n) {
  var newrank = document.getElementById('app').querySelectorAll('ul.ranked-list li');
  for (let i = 0; i < newrank.length; i++) {
    newrank[i].innerHTML = (parseInt(newrank[i].innerHTML) + n).toString();
  }
}

function deepestChild() {
  var baby = document.querySelector('main#app div#grand-node div div div div');
  return baby;
}
