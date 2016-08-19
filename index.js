function getFirstSelector(selector){
  return document.querySelector(selector);
}

function nestedTarget(){
  return document.querySelector('#nested .target');
}

function increaseRankBy(n){
  const list = document.getElementById('app').querySelectorAll('ul.ranked-list li');
  for(let i = 0; i < list.length; i++){
    var num = parseInt(list[i].innerHTML);
    list[i].innerHTML = (num + n);
  }
}

function deepestChild(){
  var deepChild = document.querySelector("div#grand-node");
  do {
    deepChild = deepChild.querySelector('div');
  } while(!!deepChild.querySelector('div'));
  return deepChild;
}
