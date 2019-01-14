
function getFirstSelector(selector){
  return document.querySelector(selector)
}

function nestedTarget(nested, target) {
  return document.querySelector('div#nested div.target')
}

function increaseRankBy(n) {
  const lis = document
    .getElementById('app')
    .querySelectorAll('ul.ranked-list li');

  for (let i = 0; i < lis.length; i++) {
    let newInnerHTML = parseInt(lis[i].innerHTML) + n
    lis[i].innerHTML = newInnerHTML.toString()
  }
}

function deepestChild(){
  return document.querySelector('div#grand-node div div div div')
}
