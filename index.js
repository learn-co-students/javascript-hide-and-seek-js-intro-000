function getFirstSelector(temp){
  var found = document.querySelector(temp);
  return found
}

function nestedTarget(){
  var rslt = document.querySelector('.target')
  return rslt;
}

function increaseRankBy(n){
  const lis = document
    .getElementById('app')
    .querySelectorAll('ul.ranked-list li');

  for (let i = 0; i < lis.length; i++) {
    var j = lis[i].innerHTML
    var k = parseInt(j) + parseInt(n)
    lis[i].innerHTML = (k).toString();
  }
}

function deepestChild(){
  var node = document.querySelector('#grand-node div div div div')
  return node

}
