function getFirstSelector(selector){
  selector = document.querySelector(selector);
  return selector;
}

function nestedTarget(){
  let element = document.getElementById('nested');
  let target = element.querySelector('div div div .target');
  return target;
}

function increaseRankBy(n){
  let element = document.querySelectorAll('.ranked-list li');

    for (var i = 0; i < element.length; i++) {
      element[i].innerHTML = parseInt(element[i].innerHTML,10) + parseInt(n); }
}


function deepestChild(){
  let element = document.querySelectorAll("#grand-node div");

  for (var i = 0; i < element.length; i++) {
    if (element[i] === element[element.length - 1]) {
      return element[i];
    }

}
}
