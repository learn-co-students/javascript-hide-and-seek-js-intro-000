function getFirstSelector(selector){
  return document.querySelector(selector)
}

function nestedTarget(target){
  return document
  .getElementById('nested')
  .getElementsByClassName('target')[0]
}
function increaseRankBy(n){
  const rankedLists = document.getElementsByClassName('ranked-list');
  for (let i = 0; i < rankedLists.length; i++) {
    rankedLists[i].textContent = (parseInt(rankedLists[i].textContent) + n).toString();
  }
}

function deepestChild() {
  let parent = document.getElementById('grand-node');
  // const children = Array.from(parent.querySelectorAll('div'));
  // return children;
  // let children = Array.from(parent.children);
  let child = parent.children[0];
  while (child) {
    parent = child;
    child = parent.children[0];
  }
  // return children.find(div => div.textContent === "boo!");
  return parent;
};
