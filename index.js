function getFirstSelector(selector){
  return document.querySelector(selector);
}

function nestedTarget(){
  return document.querySelector('#nested .target');
}

function increaseRankBy(n){
  // increases ranks in .ranked-list by n
  //get all the nested elements of ranked list
  let rankedList = document.querySelectorAll('ul.ranked-list li');
  //store them in a variable?
  // you'll want to grab the entire list and move all items

  for (var i = 0, l = rankedList.length; i < l; i++) {
     rankedList[i].innerHTML = parseInt(rankedList[i].innerHTML) + n;
  }
}

function deepestChild(){
  return document.querySelector('#grand-node:last-of-type');
}
