function deepestChild(){

  var nodeList = document.getElementById('grand-node').querySelectorAll('div')
  var current = []
  for (let i = 0; i < nodeList.length; i++) {
    current.push(nodeList[i])
  }

  for (let i = 0; i < current.length; i++) {
    if (current[i].innerText == 'boo!'){
      return nodeList[i]
    }
  }
}
//this code passed in the console but not the index
