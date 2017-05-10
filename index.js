function getFirstSelector(selelctor){
  document.querySelector(selector)
  }

function nestedTarget(){
  document.querySelector('#nested .target')
}

function increaseRankBy(n){
var list = document.querySelectorAll('ul.ranked-list li')
for (let i = 0; i < list.length;i++{
  list[i].innerHTML= parseInt(list[i].innerHTML, 10) + n;
  }
}

function deepestChild() {
  const list = document.getElementById('app').querySelectorAll('ul.ranked-list li')
  for (let i=0, 1=list.length; i<1; i++) {
    list[i].innerHTML = (i+1).toString()
  }
