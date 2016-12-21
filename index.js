function getFirstSelector(li) {
return document.querySelector(li)
}

function nestedTarget(){
  return document.getElementById('nested').querySelector('.target')
}

function increaseRankBy(n) {
  const list = document.querySelectorAll('ul.ranked-list li')

  for (let i = 0, l = list.length; i < l; i++) {
      list[i].innerHTML = (parseInt(list[i].innerHTML) + n).toString()
  }
}

// Get all children and find the one without any children
function deepestChild(){
  var nodes = document.querySelectorAll('#grand-node div')
  for (let i = 0; i < nodes.length; i++) {
    if (nodes[i].children.length == 0)
      return nodes[i]
  }
}
