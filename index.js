function getFirstSelector(selector) {
  return document.querySelector(selector)
}

function nestedTarget() {
var  thing = document.getElementById('nested')
return thing.querySelector('div.target')
}

function deepestChild() {
  var  thing = document.getElementById('grand-node')
  return thing.querySelector('div div div div')
}

/*for increaseRankBy use children for loop trhu ul*/
function increaseRankBy(n) {
  var numbers = document.getElementById('app').querySelectorAll('ul.ranked-list li')
var i=0
var newar =[]
  for (i=0; i < numbers.length; i++) {
    numbers[i].innerHTML = parseInt(numbers[i].innerHTML, 10) + n
  }
}
