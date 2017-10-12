function getFirstSelector(selector){
  let item = document.querySelector(selector);
  return item;
}
function nestedTarget(){
  let item = document.querySelector('#nested .target');
  return item;
}
function deepestChild(){
  let child = document.querySelector('#grand-node')
  while (child.querySelector('div')){
    child = child.querySelector('div')
  }
  return child;
}
function increaseRankBy (n){
  let lists = document.querySelectorAll('.ranked-list');
  for (let i = 0; i < lists.length; i++){
      let innerLis = lists[i].querySelectorAll('li');
      for (let ii = 0; ii < innerLis.length; ii++){
          innerLis[ii].innerHTML = parseInt(innerLis[ii].innerHTML, 10) + n;
      }
  }
}
