function getFirstSelector(selector) {
  return document.querySelector(selector);
}

function nestedTarget() {
  return document.getElementById('nested').querySelector('div.target')
}

function increaseRankBy(n) {
  const listItems = document.getElementById('app').querySelectorAll('ul.ranked-list li');
  for (var i = 0; i < listItems.length; i++) {
  listItems[i].innerHTML = parseInt(listItems[i].innerHTML) + n
  }
}

function deepestChild() {
  const innerNodeList = document.getElementById('grand-node').querySelectorAll('div');
  var queue = [];
  var current = innerNodeList

  while (current.childElementCount !== 0) {
    for (var i = 0; i < current.length; i++) {
      queue.push(current[i])
    }
      current = queue.shift()
    }
return current
  }
