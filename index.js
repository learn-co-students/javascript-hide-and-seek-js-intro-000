function getFirstSelector(selector) {
  return document.querySelector(selector);
}

function nestedTarget() {
  return document.getElementById('nested').querySelector('.target')
}

function increaseRankBy(n) {
  const poop = document.querySelectorAll('.ranked-list li')
  for (let i = 0; i < poop.length; i++) {
    poop[i].innerHTML = parseInt(poop[i].innerHTML) + n;
  }
}

function deepestChild() {
  const node = document.getElementById('grand-node')

  let current = node
  let next = []

  while (current) {

    if (Array.isArray(current)) {
      for (let i = 0; i < current.length; i++) {
        next.push(current[i])
      }
    }
    current = next.shift()
  }
  return null

}
