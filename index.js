function getFirstSelector(selector) {
  return document.querySelector(selector);
}

function nestedTarget() {
  //return document.getElementById("nested").querySelector(".target");
  return document.querySelector('#nested .target');
}

function increaseRankBy(n) {
  //let lists = document.getElementById('app').querySelectorAll('ul.ranked-list li');
  let lists = document.querySelectorAll('.ranked-list')
  for (let i = 0; i < lists.length; i++) {
  lists[i].innerHTML = parseInt(lists[i].innerHTML) + n;
  }
}

function deepestChild() {
  var list = document.getElementById("grand-node").querySelectorAll("div");
  var test;
  for(let i = 0; i <list.length - 1 ; i++) {
    test = list[i].querySelector("div");
  }
  return test;
}
