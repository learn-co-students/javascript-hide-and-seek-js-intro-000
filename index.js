function getFirstSelector(selector) {
  const nezdr = document.querySelector(selector)
  return nezdr
}

function nestedTarget() {
  var undefinED = document.querySelector('div#nested div.target')
  return undefinED
}

function increaseRankBy(n) {
var lis = document.querySelectorAll('ul.ranked-list')
   for (let i = 0, l = lis.length; i < l; i++) {
      lis[i].innerHTML = (i + n).toString()
   }
}

function deepestChild() {
  var startPoint = document.getElementById('grand-node').children[0]
  var end = startPoint
  while (end) {
    startPoint = end
    end = startPoint.children[0]
  }
  return startPoint
}
