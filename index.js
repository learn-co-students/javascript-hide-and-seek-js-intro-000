 function getFirstSelector(selector) {
   return document.querySelector(selector);
 }

 function nestedTarget() {
   return document.querySelector('#nested .target');
 }

 function deepestChild() {
   var element = document.querySelector('#grand-node');
   var next = element.children[0]
   
   while(next) {
     element = next;
     next = element.children[0]
   }
   
   return element;
 }

 function increaseRankBy(n) {
   var elements = document.querySelectorAll('.ranked-list');
   for(var i = 0; i < elements.length; i++) {
     elements[i].innerHTML = (parseInt(elements[i].innerHTML, 10) + n);
   }
 }