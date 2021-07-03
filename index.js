function getFirstSelector(selector) {
  return document.querySelector(selector);
}

function nestedTarget() {
  return document.getElementById('nested').querySelector('.target');
}

function increaseRankBy(n) {
  const lis = document.getElementById('app').querySelectorAll('.ranked-list li')
  
  for  (let i = 0; i < lis.length; i++) {
  lis[i].innerHTML =  parseInt(lis[i].innerHTML) + n;
  }
}

function deepestChild() {
  var nodes = document.querySelectorAll('#grand-node div')
  
  for (let i = 0; i < nodes.length; i++) {
    if(nodes[i].childElementCount === 0) {
      return nodes[i];
    }
  }
}


