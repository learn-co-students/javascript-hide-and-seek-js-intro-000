function getFirstSelector(selector){

  const tagnames = document.querySelectorAll(selector);


  return tagnames[0];
}


function nestedTarget(){

  const lis = document.getElementById('nested');
  //const target = document.getElementsByTagName('.target');
  return lis;


}

function deepestChild(){

const lis = document.getElementById('grand-node');
const firstchild = lis.children[0];
const secondchild = firstchild.children[0];
const thirdchild = secondchild.children[0];
const fourthchild = thirdchild.children[0];
return fourthchild;
}




function increaseRankBy(n){

  const lis = document.getElementById('app').querySelectorAll('ul.ranked-list li')

  for (let i = 0, l = lis.length; i < l; i++) {
    lis[i].innerHTML = 3+ parseInt(lis[i].innerHTML);
  }

  return lis;

}
