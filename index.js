function getFirstSelector(selector) {
  return document.querySelector(selector)
}

function nestedTarget() {
  return document.querySelector('#nested .target')
}

function increaseRankBy(n) {
  var find = document.querySelectorAll('.ranked-list')

  for (let i = 0; i < find.length; i++) {
    for (let c = 0; c < find[i].children.length; c++) {
      find[i].children[c].innerHTML = (parseInt(find[i].children[c].innerHTML, 10) + n).toString();
    }
  }
 return find
}


function deepestChild() {
  let find = document.querySelector('#grand-node')
  let count = []
  while (find.children[0]) {
    count.push(find.children[0])
    find = find.children[0]
  }
  return count[count.length-1]
}
