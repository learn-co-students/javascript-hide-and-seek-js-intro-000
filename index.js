function getFirstSelector(selector){
  var element = document.querySelector(selector)
  return element;
}

function nestedTarget(){
  var nestedElement = document.querySelector('#nested .target')
  return nestedElement;
}

function increaseRankBy(n){
  const list = document.getElementById('app').querySelectorAll('ul.ranked-list li')
  
  for (let i = 0; i < list.length; i++){
    list[i].innerHTML = (parseInt(list[i].innerHTML) + n).toString();
  }
}

function deepestChild(){
  var item = document.getElementById('grand-node').querySelectorAll('div')
  for (let i = 0; i < item.length; i++){
    if (item[i].querySelectorAll('div').length < 1){
        var deepest = (item[i])}
  }
  return deepest;
}