function getFirstSelector(selector) {
  return document.querySelector(selector);
};

function nestedTarget() {
  var l = document.querySelector('div#nested div div div div.target');
  return l;
};

function increaseRankBy(n) {
  const lis = document.getElementById("app").querySelectorAll('ul.ranked-list li');

for (let i = 0, l = lis.length; i < l; i++) {
  lis[i].innerHTML = (parseInt(lis[i].innerHTML) + n).toString();
}
};

function deepestChild() {
  var i = document.querySelector('#grand-node div div div div');
  return i;
};
