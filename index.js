function getFirstSelector(selector){
  const main = document.querySelector(selector);
  return main;
}

function nestedTarget() {
  const nestedTarget = document.querySelector('#nested .target');
  return nestedTarget;
}


function deepestChild() {
const deepestChild = document.querySelector('#grand-node div div div div')
return deepestChild;
}


function increaseRankBy(n) {
  const listy = document.getElementById('app').querySelectorAll('ul.ranked-list li');

  for (let i = 0; i < listy.length; i++) {

    //get the ith element(a li) in the node list "children"
    //parse inner html of that li for an integer
    var thisOne = parseInt(listy[i].innerHTML);
    listy[i].innerHTML = thisOne + n;
    //increase that integer by n
    //start + 3;

  }
}

//= (i + n).toString();
//  for (let i = 0; i < lis.length; i++) {
  //  parseInt(children[i].innerHTML) = (i++).toString();
  //}
//}

//lis[i].innerHTML = (()) + n).toString();
    //parseInt(lis[i].innerHTML = (i++).toString();
