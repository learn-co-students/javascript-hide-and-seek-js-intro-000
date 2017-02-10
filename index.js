
function getFirstSelector(selector){
  return document.querySelector(selector)
  //console.log("Item: " + item[0] + " item real: " + item);
  //debugger
  //return item[0].id
}

function nestedTarget() {
    return document.querySelector('#nested .target')
}

function increaseRankBy(n) {
  //var item = document.getElementsByClassName(".ranked-lists")
  //above didn't work
  var item = document.querySelectorAll(".ranked-list")
  var itemcount = item.length

  //console.warn("itemcount :" + itemcount)
  for (var i=0;i<itemcount; i++){
    var childrencount = item[i].children.length
    //console.warn(i + "time, child count is " + childrencount)
    for (var j = 0; j < childrencount; j++) {
      //console.warn(j + "item, sdding n to "+ item[i].children[j].textContent)
       item[i].children[j].textContent = parseInt(item[i].children[j].textContent) + n
    }
  }
}

function deepestChild() {
  //most deeply nested child from div#grand-node
  //debugger
  var node = document.querySelector("#grand-node")

  //console.warn("outside while, hasChild node: " + node.childElementCount)

  while(node.childElementCount>0){
    debugger
    console.warn("Chile node: " +node.child)
    node = node.children[0]
  }
  return node
}
