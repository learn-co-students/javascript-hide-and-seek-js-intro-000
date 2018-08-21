
function getFirstSelector(selector) {
  let element = document.querySelector(selector)
  //console.log('?', element.id == 'nested')
  //debugger;
  return element
}

function nestedTarget() {
  let element = document.querySelector('#nested .target')
  return element
}

function deepestChild() {
  let next = '#grand-node'
  let element = document.querySelector(next)
  while (true) {
    element = document.querySelector(next)
    if (element.childElementCount === 0)
       return element
    else
       next += ' ' + element.localName
  }
}

function increaseRankBy(n) {
  const lis = document
  .getElementById("app")
  .querySelectorAll("ul.ranked-list li");

  for (let i = 0; i < lis.length; i++) {
   lis[i].innerHTML = parseInt(lis[i].innerHTML, 10) + n
  }
}
