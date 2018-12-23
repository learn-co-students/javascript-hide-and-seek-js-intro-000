

function getFirstSelector(selector){
  return document.querySelector(selector);
}
function nestedTarget(){
  return document.querySelector('#nested .target');
}
function increaseRankBy(n){
  const lis = document.getElementById('app').querySelectorAll('ul.ranked-list li');
  for (let i = 0; i < lis.length; i++){
    lis[i].innerHTML = parseInt(lis[i].innerHTML, 10) + n
  }
}
function deepestChild(){
  const grand = document.getElementById('grand-node')
  function goDeeper(element){
    if (element.querySelector('div')){
      return goDeeper(element.querySelector('div'))
    }
    return element
  }
  return goDeeper(grand)
}
/// document.getElementById/sClassName/TagName classname finds all
/// document.querySelector('selector'), document.querySelectorAll('same')
/*const main = document.getElementsByTagName('main')[0]
undefined
const div = main.children[1]
undefined
const p = div.getElementsByTagName('p')[0]
p.textContent = 'Goodbye!'
"Goodbye!"*/
