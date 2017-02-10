function getFirstSelector(selector) {
  return document.querySelectorAll(selector)[0];
}

function nestedTarget() {
  var a = document.getElementById("nested")
  return a;
}

function increaseRankBy(n) {
  var a = document.getElementsByClassName("ranked-list")
  var first = a[0].children;
  var second = a[1].children;

  for (var i=0; i<first.length; i++) {
    first[i].innerHTML = parseInt(first[i].innerHTML) + n;
  }

  for (var i=0; i<second.length; i++) {
    second[i].innerHTML = parseInt(second[i].innerHTML) + n;
  }
}

function deepestChild() {
  var div = document.getElementById("grand-node");
  return div;
}
