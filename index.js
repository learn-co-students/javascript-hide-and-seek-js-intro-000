
function getFirstSelector(selector) {

return document.querySelector (selector)
}

function nestedTarget() {
return document.querySelector('#nested .target')
 }

function increaseRankBy(n){
const lis = document.querySelectorAll('ul.ranked-list li')
for (let i = 0, l = lis.length; i < l; i++) {
  lis[i].innerHTML = (parseInt(lis[i].innerHTML)+n).toString()
}
}

function deepestChild() {

var current = document.querySelectorAll('div#grand-node');
current = current[0].querySelectorAll ('*');
current = current [(current.length -1)] 
return current
}



