var getFirstSelector = selector => {
  return document.querySelector(selector);
}

var nestedTarget = () => {
  return document.querySelector('#nested .target')
}

var increaseRankBy = n => {
  var list = document.querySelectorAll('.ranked-list li')

  for (var i = 0; i < list.length; i++) {
    list[i].innerHTML = parseInt(list[i].innerHTML) + n
  }
}

var deepestChild = () => {
  var grand = document.querySelector('#grand-node')
  var list = grand.querySelectorAll('div')

  for (var i = 0; i < list.length; i++) {
    if (list[i].children.length == 0) {
      return list[i]
    }
  }
}
