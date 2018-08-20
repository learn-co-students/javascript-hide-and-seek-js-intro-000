function getFirstSelector(selector)
{
  return document.querySelector(selector);
}

function nestedTarget(){
  return document.querySelector('#nested. target')
}

function increaseRankBy(n){
  const lis = document.querySelectorAll('ul.ranked-list li')
  for (let i = 0; i < lis.length; i++){
    lis[i].innerHTML = (parseInt(lis[i]).innerHTML + n);
    console.log(lis[i].value);
  }
}


function deepestChild(){
  const bod = document.getElementById('grand-node').querySelector('div');
  return bod[bod.length - 1];

}
