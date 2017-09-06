function getFirstSelector(selector) {
  return document.querySelector(selector);
}

function nestedTarget(){
  return document.querySelector('#nested .target');
}

function deepestChild() {
  var d = document.querySelectorAll("div#grand-node")[0];
  var nextd;
  var hasChild = true;

  while(hasChild) {
       nextd = d.querySelector('div');

        if (nextd === null)
            hasChild = false
         else
            d = nextd
  }
   return d;
}

function increaseRankBy(n){
  const lis = document.querySelectorAll('.ranked-list')

  for (let i = 0, l = lis.length; i < l; i++) {
    lis[i].innerHTML = (parseInt(lis[i].innerHTML) + n).toString()
  }
}
