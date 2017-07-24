function getFirstSelector(selector) {
  const select1 = document.querySelector(selector);
    return select1;
  }

function nestedTarget() {
var pulling = document.querySelector('#nested, .target');
return pulling;
}

function increaseRankBy(n) {
  var list = document.querySelectorAll(".ranked-list");

  var children1 = list[0].children;
  for (var i = 0; i < children1.length; i++) {
    children1[i].innerHTML = 1 + i + n
  }

  var children2 = list[1].children;
  for (var i = 0; i < children2.length; i++) {
    children2[i].innerHTML = 12 - i + n;
  }
  return
}

function deepestChild() {
  var goDeeper = document.querySelector('#grand-node div div div div');
  return goDeeper;

}
