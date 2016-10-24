function getFirstSelector(selector) {
  return document.querySelector(selector);
}

function nestedTarget() {
var targetNest = document.getElementById('nested').getElementsByClassName('target')
return targetNest[0]
}

function deepestChild() {
  const allDeep = document.querySelector('div#grand-node');
  const allGrand = allDeep.querySelectorAll('*');
  let current = allGrand;

if (current) {
  for (let i = 0, l = current.length; i < l; i++) {
    if (current[i].querySelectorAll('*').length > 0) {
        // great! there is another level
        }
    else {
      // if querySelectorAll doesn't find anything, it's the deepest child!
      return current[i]
      }

      }
    }
  }

function deepestChildWinner() {
  var deepestChildElement = document.querySelector('div#grand-node div div div div');
  return deepestChildElement
}

function increaseRankBy(n) {
const lis = document.querySelectorAll('ul.ranked-list li')

for (let i = 0, l = lis.length; i < l; i++) {
  lis[i].innerHTML = parseInt(n) + parseInt(lis[i].innerHTML, 10)
}
}
