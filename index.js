function getFirstSelector(selector) {
    return document.querySelector(selector)    
}

function nestedTarget() {
  return document.getElementById('nested').querySelector('.target')
}

function increaseRankBy(n) {
var item = document.querySelectorAll(".ranked-list")
for (var i = 0; i < item.length; i++) {
  item[i].innerHTML = parseInt(item[i].innerHTML) + 1
  }
}


function deepestChild() {
  var children = document.getElementById("grand-node").querySelectorAll("div")

  for (var i=0; i < children.length; i++) {
    var child = children[i]
    if (i === children.length - 1){
      return child
    }
  }
  
}