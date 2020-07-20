
function getFirstSelector(selector) {
  return document.querySelector(selector)
}

function nestedTarget() {
  return document.getElementById('nested').querySelector('.target');
}

function increaseRankBy(n) {
  var lis = document.querySelectorAll('.ranked-list li')
  for (var i = 0; i < lis.length; i++) {
    lis[i].innerHTML = parseFloat(lis[i].innerHTML) + n;

  }
}

// increaseRankBy(3);

function deepestChild() {
  return document.querySelector('#grand-node').querySelector('div div div div div')
}

// function increaseRankBy(n) {
//   const list = document.querySelectorAll('ul.ranked-list li')
//   for (var i = 0; i < list.length; i++) {
//       list[i].innerHTML = parseInt(list[i].innerHTML) + n;
//     }
//   }
