function getFirstSelector(selector){
  return document.querySelector(selector);
}

function nestedTarget(){
  return document.getElementById('nested').querySelector('div.target')
}

function increaseRankBy(n){
  const items = document.querySelectorAll('ul.ranked-list li')

  for (let i = 0; i < items.length; i++) {
    console.log(items[i].innerHTML);
    items[i].innerHTML = (parseInt(items[i].innerHTML) + n);
  }
}

function deepestChild(){
  return document.getElementById('grand-node').querySelector('div').querySelector('div').querySelector('div').querySelector('div')
}
