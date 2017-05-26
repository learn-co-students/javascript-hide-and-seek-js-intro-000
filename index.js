function getFirstSelector(selector) {
  var a = document.querySelector(selector);
  return  a
}

function nestedTarget() {
  var target = document.getElementById('nested').querySelector('.target');
  return target
}

function increaseRankBy(n) {
  var nodeLi = document.getElementById('app').querySelectorAll('.ranked-list li');
  for(var i = 0; i < nodeLi.length; i++) {
    var inner = nodeLi[i].innerHTML;
    nodeLi[i].innerHTML = (n + parseInt(inner, 10));
  }
  return nodeLi;
}

 function deepestChild() {
  //  var div = document.querySelectorAll('div');
  //  var current = " ";
  //  while(div) {
  //    current = div.innerHTML;
  //  }
  var last = document.querySelectorAll("#grand-node div")
   return last[last.length-1];
 }
