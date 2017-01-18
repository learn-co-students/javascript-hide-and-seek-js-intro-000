function getFirstSelector(selectors) {
  return document.getElementById("app").querySelector(selectors);

}
function nestedTarget() {
    var x = document.getElementById('app').querySelectorAll('#nested');
    var y = recursiveGet(x, 'target');
    return (y);
    //console.dir(x, { depth: null })
}
function recursiveGet(array, str ) {
     var childArray =[];
    // console.dir(array, { depth: null })
     if (array.length === 0 ) { return null }
     if (array.length > 0)
     {
         for (var i=0;i< array.length;i++ ) {
             if (array[i].className='target') return array[i];
             childArray.push(array[i]);

         }
        recursiveGet(childArray, str);
     }
}

function deepestChild() {
  var x = document.getElementById('app').querySelectorAll('#grand-node div');
//  console.dir(x,  { depth: null });
  var y = recursiveGet2(x);

//  console.log("Returned " + y );
   return (y);
}
var depth = 0;
var retStr = "";
function recursiveGet2(array ) {
     var childArray =[];
//    console.dir(array, { depth: null })
     if (array.length === 0 ) { return null; }
     if (array === undefined ){ return null; }
     if (array.length > 0)
     {
         for (var i=0;i< array.length;i++ ) {
//console.dir(array[i], { depth: null })
             if (array[i].childElementCount === 0) {
//               console.dir(array[i].innerHTML, { depth: null })
//                retStr = array[i].innerHTML;
                return (array[i])};
//console.dir(array[i], { depth: null })

             childArray.push(array[i].firstElementChild);

         }
         depth = depth+1;
         if (depth > 5) { return 0 ;}
        return recursiveGet2(childArray);
     }
}


function increaseRankBy(n) {
     var x = document.getElementById("app").querySelectorAll("ul.ranked-list li");
//console.dir(x,  { depth: null });
  for (var i=0;i< x.length;i++ ) {
       x[i].innerHTML = parseInt(x[i].innerHTML)+n;

  }
}
