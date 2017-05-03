function getFirstSelector(selector){
  return document.querySelector(selector);
}

function nestedTarget(){
  return document.querySelector("#nested .target");
}

function increaseRankBy(n){
  var li_list = document.querySelectorAll('ul.ranked-list li');
  for(var i = 0; i<li_list.length;i++){
    li_list[i].innerHTML = (parseInt(li_list[i].innerHTML) + n).toString();
  }  
}

function deepestChild(){
  var list = document.querySelectorAll('div#grand-node');
  var child_node = list[0].children[0];
  while(child_node){
    list = child_node
    child_node = list.children[0]
  }
  return list
}