function getFirstSelector (selector) {
  return document.querySelector(selector);
}

function nestedTarget () {
  return document.getElementById('nested');
}

function increaseRankBy (num) {
  var collection = document.getElementById('app').querySelectorAll('ul.ranked-list li');

  for (var i = 0; i < collection.length; i++) {
    collection[i].innerHTML = parseInt(collection[i].innerHTML) + num;
  }
}

function deepestChild () {
  var list = document.getElementById('grand-node').querySelectorAll('div');

  return list[list.length - 1];
}
