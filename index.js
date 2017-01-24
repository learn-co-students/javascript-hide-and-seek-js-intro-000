
function getFirstSelector(selector) {

  return document.querySelector(selector);
}

function nestedTarget() {
//return document.getElementById('nested').getElementsByClassName('target')[0];
return document.querySelector("#nested div.target");
}

function increaseRankBy(n) {
  /*var a = document.getElementById("app").querySelectorAll("ul.ranked-list li");

  for(var i = 0; i < a.length; i++) {
    var b = parseInt(a[i].innerHTML);
    a[i].innerHTML = (b + n).toString();
  }*/
  var a = document.getElementById('app');
  var b = a.getElementsByClassName('ranked-list');

  for(var i = 0; i < b.length; i++) {
      var x = parseInt(b[i].innerHTML);
      b[i].innerHTML = (x + n).toString();
  }
  return;
}

function deepestChild() {
  var moth = document.getElementById('grand-node');
  var child = moth.children
  for(var i = 0; i < child.length; i++) {
    var more = child[i];
  }
  return more;
}
