function getFirstSelector(selector){
  return document.querySelector(selector);
}

function nestedTarget(){
  return document.getElementById('nested').querySelector('div.target');
}

function increaseRankBy(n){
  var lis = document.getElementById('app').querySelectorAll('ul.ranked-list li');

  for(let i = 0; i < lis.length; i++){
    lis[i].innerHTML = (parseInt(lis[i].innerHTML, 10) + n).toString();
  }
}

function deepestChild(){
  var lis = document.getElementById('grand-node').querySelectorAll('div');

  for(let i = 0; i < lis.length; i++){
    if(i === lis.length - 1){
      return lis[i];
    }
  }
/**
  return lis[lis.length-1] // This is how I first tried to do it. This works.


  function deepestChild() {
    let node = document.getElementById('grand-node')
    let nextNode = node.children[0]

    while (nextNode) {
      node = nextNode
      nextNode = node.children[0]
    }
    return node
  } //This is how the program wanted it done

    var grandNode = document.getElementById('grand-node');
    return grandNode.querySelector('div div div div div') // This is how "Z" ended up doing it.
**/
}
