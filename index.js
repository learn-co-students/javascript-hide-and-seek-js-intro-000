function  getFirstSelector(selector){
return document.querySelector(selector)

}
function  nestedTarget(){
return document.querySelector('#nested div.target' )

}
function increaseRankBy(n){

  const lis =  document.getElementById('app').querySelectorAll('ul.ranked-list li')

  for (let i = 0; i < lis.length; i++) {
    lis[i].innerHTML  = parseInt(lis[i].innerHTML , 10) + n;
  }
}
function deepestChild() {
//const lis =  document.getElementById('#grand-node').querySelectorAll('div')                     ;

//for (var i = 0; i < lis.length; ++i) {
//if (lis[i].innerHTML ){return lis[i] }
var divs = document.querySelector('#grand-node');
var divs2 = divs.querySelectorAll('div');
return divs2[divs2.length-1]
//for(var i = 0; i < divs2.length; i++){
   //do something to each div like
//   if (divs2[i].innerHTML){return divs2[i]}
}
