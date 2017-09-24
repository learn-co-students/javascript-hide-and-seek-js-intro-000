function getFirstSelector (selector) {
  return document.querySelector(selector);
}


function nestedTarget () {
  return document.querySelector('#nested').querySelector('.target');
}

function increaseRankBy(n) {

  const list_items = document.querySelectorAll('.ranked-list li');
  for (let i=0; i<list_items.length;i++) {
    let item = list_items[i];
    const currentValue = parseInt(item.innerHTML);
    item.innerHTML = `${currentValue + n}`;
  }
}

function deepestChild() {
  let node = document.querySelector('div#grand-node');
  while (node.firstElementChild !== null) {
    node = node.firstElementChild;
  }
  return node;
}
