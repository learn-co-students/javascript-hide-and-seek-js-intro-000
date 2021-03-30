function getFirstSelector(selector) {
let element = document.querySelector(selector)
return element
}

function nestedTarget() {
let x = document.querySelector('#nested .target')
return x
}

function increaseRankBy(n) {
let y = document.querySelectorAll('ul.ranked-list li')
for (let i=0; i<y.length; i++){
  //parseInt(y[i].innerHTML) = y + n
  y[i].innerHTML= parseInt(y[i].innerHTML) + n
}
}

function deepestChild() {
  let a = document.getElementById('grand-node')
  let b = a.children[0]
  while (b) {
    a = b
    b = a.children[0]
    }
    return a 
  }
