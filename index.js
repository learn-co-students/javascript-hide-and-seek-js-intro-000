function getFirstSelector(selector){
  return document.querySelector(selector)
}

function nestedTarget(){
  return document.getElementById('nested').querySelector('.target')
}

function increaseRankBy(n){
  let nodes = document.querySelectorAll('.ranked-list li')
  
  for (let i = 0; i < nodes.length; i++)
    nodes[i].innerHTML = parseInt(nodes[i].innerHTML) + n
}


function deepestChild(){
  let current = document.getElementById('grand-node')

  while (current.childElementCount > 0)
    current = current.children[0]

  return current
}
