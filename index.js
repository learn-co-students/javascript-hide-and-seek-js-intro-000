function getFirstSelector(selector) {
  const li =  document.querySelector(selector)
  return li
}

function nestedTarget() {
  const li = document.querySelector('#nested .target')
  return li
}

function deepestChild() {
  var lis = document.getElementById('grand-node').querySelector('div')
  return findDeepestChild(lis)
      // return null;
}


function findDeepestChild(lis) {
    for(var i=0, j=lis.children.length; i<j; i++){
       if(lis.children[i] == null){
          return lis
        }
        else {
          lis = findDeepestChild(lis.children[i])
        }
    }
    return lis
}

function increaseRankBy(n) {
  var innerlist
  const lis = document.getElementsByClassName('ranked-list')
  for(var i=0; i<lis.length; i++){

     innerlist = lis[i].getElementsByTagName('li')
     for (var j=0; j<innerlist.length; j++){
       innerlist[j].innerHTML = (parseInt(innerlist[j].innerHTML)+n)
     }
   }
}
