
var getFirstSelector = function (selector) {
  var firstElement =  document.querySelector(selector);
  return firstElement;
}

var nestedTarget = function () {
  var searchAndDestroy = document.getElementById('nested').querySelector('.target');
  return searchAndDestroy;
}

var increaseRankBy = function (n) {
    var increase = document.querySelectorAll('.ranked-list li');
    for (let i = 0, l = increase.length; i < l; i++) {
    var rank = increase[i].innerHTML;
    var number = parseInt(rank);
    increase[i].innerHTML = n + number;
  }
}

var deepestChild = function () {
  var deep = document.getElementById('grand-node').querySelectorAll('div');
  return deep[deep.length -1];
}
