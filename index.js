function getFirstSelector(selector) {
  const nested = document.querySelector(selector);
  return nested;
}

function nestedTarget() {
  const target = document.getElementById('nested').querySelector(".target");
  return target;
}

function deepestChild() {
  const boo = document.getElementById("grand-node").querySelectorAll('div');
  let deepestChildString = '';
  for (let i=0; i<boo.length; i++) {
    if (i===boo.length-1) {
      deepestChildString = boo[i];
    }
  }
  return deepestChildString;
}

function increaseRankBy(n) {
  let child = document.getElementById('app').querySelectorAll('ul.ranked-list li');
  let currentNumStr = '';
  let currentNum = 0;
  for(let x = 0; x < child.length; x++) {
    currentNumStr = child[x].textContent;
    currentNum = parseInt(currentNumStr, 10);
    child[x].innerHTML = (currentNum + n).toString();
  }
}
