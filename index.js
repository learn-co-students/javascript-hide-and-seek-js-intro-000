function getFirstSelector(selector){
  var result = document.querySelector(selector);
  return result
}

function nestedTarget(){
  var result = document.getElementById('nested').querySelector('.target')
  return result
}

function increaseRankBy(n){
  const main = document.querySelectorAll('.ranked-list li');
  for (let i=0; i< main.length ; i++){
    var x = parseInt(main[i].innerHTML, 10)
    x = x + n
    main[i].innerHTML = x
  }
}

function deepestChild(){
  let node = document.getElementById('grand-node');
  let nextNode = node.children[0];

  while(nextNode){
    node = nextNode
    nextNode = node.children[0]
  }
  return node
}
