function getFirstSelector(selector) {
  return document.querySelector(selector);
};

function nestedTarget() {
  return document.querySelector('#nested .target');
};

function increaseRankBy(n) {
  var ranked = document.querySelectorAll('.ranked-list');
  for (let i = 0; i < ranked.length; i++) {
    for (let j = 0; j < ranked[i].children.length; j++) {
      ranked[i].children[j].innerHTML = parseInt(ranked[i].children[j].innerHTML) + n;
    };
  };
};

function deepestChild() {
  var children = document.querySelector('#grand-node');
  var children2 = children.children[0];
  for (let i = 0; i < children2.length; i++) {
    children = children2;
    children2 = children.children[0];
  };
  return children;
};
