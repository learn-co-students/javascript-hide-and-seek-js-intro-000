 function getFirstSelector(selector) {
   return document.querySelector(selector);
 }

 function nestedTarget() {
   return document.querySelector('#nested .target');
 }

 function deepestChild() {
   var element = document.querySelector('#grand-node');
   while(true) {
     var nextElement = element.querySelector('div');
     if(nextElement == null) {
       return element;
     }
     element = nextElement;
   }
 }

 function increaseRankBy(n) {
   var elements = document.querySelectorAll('.ranked-list');
   for(var i = 0; i < elements.length; i++) {
     var rank = parseInt(elements[i].innerHTML);
     rank++;
     elements[i].innerHTML = rank;
   }
 }