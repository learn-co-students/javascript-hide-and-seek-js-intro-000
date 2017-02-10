function getFirstSelector(selector){
   return document.querySelector(selector)
}

function nestedTarget(){
  return document.getElementById('nested').getElementsByClassName('target')[0]
}

function increaseRankBy(n){
  const list = document.getElementsByClassName("ranked-list");
  for (var i = 0; i < list.length; i++) {
    var children = list[i].children;
    for (var j = 0; j < children.length; j++) {
      const value = parseInt(children[j].innerHTML)
      children[j].innerHTML = value + n;
    }
  }
}

function deepestChild(){
  const topNode = document.getElementById('grand-node');

  return topNode

}
