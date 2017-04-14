
function getFirstSelector(selector){
  return document.querySelector(selector)
}

function nestedTarget(){
  return document.getElementById("nested").querySelector(".target")
}

function increaseRankBy(n){
  var listitems = document.querySelectorAll(".ranked-list")
  for (var i=0; i < listitems.length ;i++) {
   listitems[i].innerHTML = parseInt(listitems[i].innerHTML) + 1
   }
  }

  function deepestChild(){
    var listitems = document.getElementById("grand-node").querySelectorAll("div")
    var l = listitems.length
    return listitems[l-1]
  }