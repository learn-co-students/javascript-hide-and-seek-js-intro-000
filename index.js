// define a Function - accepts a selector - returns 1st element that matches
function getFirstSelector(selector){
  return document.querySelector(selector);
}

// define a function - pulls a .target out of #nested both are in divs
function nestedTarget() {
  return document.querySelector('#nested .target');
}


// define a function that increases the ranks in all .ranked-list by n - parseInt()
function increaseRankBy(n){
  // create var for the list
  const list = document.querySelectorAll('.ranked-list');
  // iterate through the list length
  let i = 0;
  for (let l = list.length; i < l; i++) {
    //  create var for the children of the document
    let children = list[i].children;
    // iterate through the children length
    let j = 0;
    for (let k = children.length; j < k; j++){
      children[j].innerHTML = parseInt(children[j].innerHTML) + n;
    }
  }
}


// define a function pulls out most deeply nested child from div #grand-node 
// iterate over element - call querySelector() and querySelectorAll()
function deepestChild(){
  let list1 = document.querySelector('div#grand-node');
  let list2 = list1.children[0];
  
  while (list2){
    list1 = list2;
    list2 = list1.children[0];
  }
return list1;
}

