function getFirstSelector(selector){
  return document.querySelector(selector)
}

function nestedTarget(){
  return document.getElementById("nested").querySelector("div.target")
}

function increaseRankBy(n){
  var rankedLists = document.querySelectorAll(".ranked-list")

  for (var i = 0; i < rankedLists.length; i++){
    rankedLists[i].innerHTML = String(i + 1) + n
  }

  return rankedLists
}

function deepestChild(){
  var children = document.getElementById("grand-node").querySelectorAll("div")

  for (var i = 0; i < children.length; i++) {
    var child = children[i]
    if (i === children.length - 1){
      return child
    }
  }
}
