function getFirstSelector(selector){
  return document.querySelector(selector)
}

function nestedTarget(){
  return getFirstSelector('#nested .target')
}

function increaseRankBy (n){
  const lis = document.getElementById('app').querySelectorAll('ul.ranked-list li')
  for(let i=0; i<lis.length;i++){
    lis[i].innerHTML = parseInt(lis[i].innerHTML)+n
  }
}

function deepestChild(){
  var lis = document.getElementById('grand-node').querySelectorAll('div')
   for(let i=0; i<lis.length-1;i++){
   var test =lis[i].querySelector('div')
  }
  return test
}