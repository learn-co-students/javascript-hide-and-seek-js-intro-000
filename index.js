function getFirstSelector(selector) {
  return document.querySelector(selector);
};

function nestedTarget() {
  document.getElementById("nested").querySelectorAll("div div div");
};

function increaseRankBy(n) {
  const rankedList = document.querySelectorAll('ul.ranked-list');
  for (let i = 0; i < rankedList.length; i++) {
  rankedList[i].innerHTML = (i + parseInt(n)).toString()
}
};

function deepestChild() {
  document.getElementById("grand-node").querySelector("div div");
};
