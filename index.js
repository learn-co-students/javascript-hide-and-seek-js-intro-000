
function getFirstSelector(selector) {
  const firstElement = document.querySelector(selector);
  return firstElement;
}

function  nestedTarget(){
  const firstElement = document.querySelector("#nested .target");
  return firstElement;
}

function  deepestChild(){
  const firstElement = document.querySelector('#grand-node div div div div');
  return firstElement;

}

function  increaseRankBy(n){
  let val = 0
  const rankedLists = document.querySelectorAll('.ranked-list')
  const firstList = rankedLists[0]
  const secondList = rankedLists[1]

  let children = firstList.children

  for (let i = 0, l = children.length; i < l; i++) {
    val = parseInt(children[i].innerHTML) + n;
     children[i].innerHTML = val;
  }

  let children2 = secondList.children

  for (let i = 0, l = children2.length; i < l; i++) {
    val = parseInt(children2[i].innerHTML) + n;
     children2[i].innerHTML = val;
  }

}
