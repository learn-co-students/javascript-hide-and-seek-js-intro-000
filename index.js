function getFirstSelector(selector) {
var  a=document.querySelector(selector);
  return a;
}
function nestedTarget(){
var a=  document.querySelector('#nested .target');
return a;
}
function deepestChild(){
  var a= document.querySelector('#grand-node div div div div');
  return a;
}
function increaseRankBy(n) {
  var list = document.querySelectorAll('ul.ranked-list li');
  console.log(list);
  for (let i = 0, l = list.length; i < l; i++) {
    var rank= parseInt(list[i].innerHTML) +n;
    list[i].innerHTML= rank;
    //alert(rank);

     //return rank;
  }

}
//var de= increaseRankBy(3);
//alert(de+ "realy?");
