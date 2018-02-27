function getFirstSelector(selector) {
  return document.querySelector(selector)
}

function nestedTarget() {
  return document.querySelector('#nested .target')
}

function increaseRankBy(n) {
  var li = document.querySelectorAll('ul.ranked-list li')
  for (let i = 0; i < li.length; i++) {
    var x = parseInt(li[i].innerHTML)
    li[i].innerHTML = x + n
  }
}

function deepestChild() {
  var g = document.getElementById('grand-node')
  var arr = []

  while (g.children) {
  	g = g.querySelector('div')
  	if (g === null) {
  		break
  	}
  	arr.push(g)
  }

  return(arr[arr.length-1])
}
