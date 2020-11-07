function getFirstSelector(selector) {
  let selected = document.querySelectorAll(selector);
  return selected[0];
}

function nestedTarget() {
  let target = document.querySelector('#nested div .target');
  return target;
}

function increaseRankBy(n) {
  let lists = document.querySelectorAll(".ranked-list li");
  for(let i = 0; i < lists.length; i++) {
    lists[i].textContent = parseInt(lists[i].textContent, 10) + n;
  }
}

function deepestChild() {
  let deepest = document.querySelector("#grand-node div div div div");
  return deepest;
}