function getFirstSelector(selector){
  return document.querySelector(selector);
}

function nestedTarget(){
  return document.querySelector('#nested .target');
}

function increaseRankBy(n){
  const lis = document.querySelectorAll('#app .ranked-list li')
  lis.forEach(ele => {
    var tempInt = parseInt(ele.innerHTML)
    tempInt = tempInt + n;
    ele.innerHTML = tempInt;
  })
}

function deepestChild(){
  return document.querySelector('#grand-node div div div div')
}
