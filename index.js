function getFirstSelector(selector){
  return document.querySelector(selector)
}

function nestedTarget(){
  return document.getElementById('nested').querySelector('div.target')
}

function increaseRankBy(n){
  const list = document.getElementById('app').querySelectorAll('ul.ranked-list li')

  for(let i =0; i < list.length; i++){
    list[i].innerHTML = (parseInt(list[i].innerHTML) + n).toString()
  }
}

function deepestChild(){
  const anotherList = document.getElementById('grand-node').querySelectorAll('div')
  var child = []
  for (let i = 0; i < anotherList.length; i++){
    child = anotherList[i]
  }
  return child
}
