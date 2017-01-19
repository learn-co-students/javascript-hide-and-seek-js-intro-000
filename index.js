
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
  return document.querySelector('div#nested div div div.target')
}

//increases the ranks in all of the
//.ranked-lists by n
function increaseRankBy(n){
  //debugger
  //var first = document.querySelector('.ranked-list li')
  //console.log(first)
  var nodelist = document.querySelectorAll('.ranked-list li')
  console.log(nodelist)
  for (var i=0; i<nodelist.length; i++){
    console.log(nodelist[i].innerHTML)
    var number = parseInt(nodelist[i].innerHTML) + n
    console.log(number)
    nodelist[i].innerHTML = number
  }
}
//pulls out the most deeply nested child
//from div#grand-node
function deepestChild(){
  var base = document.querySelector('div#grand-node')
  return recurseChild(base)
  }

function recurseChild(elem){
  if (elem.children[0]!= null){
    console.log('brid)')
    //console.log(elem.hasChildNodes())
    var child = elem.children
    return recurseChild(child[0])
  }
  else{
    return elem
  }
}
