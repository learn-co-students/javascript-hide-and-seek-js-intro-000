
const getFirstSelector = selector => document.querySelector(selector);

const nestedTarget = () => document.querySelector("#nested .target");

const increaseRankBy = n => {
  let lists = document.querySelectorAll("ul.ranked-list li");
  for (var i = 0; i < lists.length; i++) {
    lists[i].innerHTML = n + parseInt(lists[i].innerHTML)
  }
}

const deepestChild = () => {
  let root = document.getElementById("grand-node");
  let nodes = root.querySelectorAll("div");
  let deepest = nodes[nodes.length - 1]
  return deepest;
}
