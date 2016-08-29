
//accepts a selector and returns the
//first element that matches
function getFirstSelector(selector){
  /*var idList;
  if (document.getElementById(selector)!= null){
    idList = document.getElementById(selector)
  }
  else if (document.getElementByClassName(selector)!= null){
    idList = document.getElementByClassName(selector)
  }
  else if (document.getElementByTagName(selector)!= null){
    idList = document.getElementByTagName(selector)
  }
  else{
    idList = []
  }
  return idList[0]*/

  return document.querySelector(selector)
}

//pulls a .target out of #nested (# is
//used for IDs in selectors

//Note that in index.html #nested and .target
//just happen to be divs. This method should
//work with arbitrary elements.)
function nestedTarget(){
  return document.querySelector('div.nested div div div div.target')
}

//increases the ranks in all of the
//.ranked-lists by n
function increaseRankBy(n){

}
//pulls out the most deeply nested child
//from div#grand-node
function deepestChild(){

}
