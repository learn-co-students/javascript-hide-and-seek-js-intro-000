function getFirstSelector(selector) {
  return document.querySelector(selector);
}

function nestedTarget() {
  var nested = document.getElementById("nested");
  return nested.querySelector(".target");
}

function increaseRankBy(n) {
  var rankedlist = document.getElementsByClassName("ranked-list");
  for (let i = 0; i < rankedlist.length; i++) {
    var items = rankedlist[i].getElementsByTagName("li");
    for (let j = 0; j < items.length; j++) {
      var num = parseInt(items[j].innerHTML)
      num += n;
      items[j].textContent = num;
      }
  }
}

function deepestChild() {
  var node = document.querySelector("div#grand-node");
  var end = true;
  while (end) {
    if (node.children[0] != undefined) {
      node = node.children[0];
    }
    else {
      end = false;
    }
  }
  return node;
}
