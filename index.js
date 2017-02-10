function getFirstSelector(selector){
  var answer1 = document.querySelector(selector);
  return answer1;
}
function nestedTarget(target, id){
  var element2 = document.querySelector('#nested .target');
  return element2;
}
function increaseRankBy(n){
  var lis = document.getElementById("app").querySelectorAll("ul.ranked-list li");

  for (var i = 0; i < lis.length; i++){
    var temp = parseInt(lis[i].innerHTML) + parseInt(n);
    lis[i].innerHTML = temp.toString();
  }
}

function deepestChild(){
  /*function breadthFirst(array, criteriaFN){
    var current = array;
    var next = [];
    while (current){
      if (criteriaFN(current)){
        return current;
      }
      if (Array.isArray(current)) {
        for (let i = 0, l = current.length; i < l; i++) {
          next.push(current[i]);
        }
      }
      current = next.shift();
    }
    return null;
  }*/
  var lis = document.getElementById("grand-node").querySelectorAll("div");
  for (var i = 0, l = lis.length; i < l; i++){
    var zeros[i] = ["[0]"];
    if (lis[zeros] === null){
      return lis[zeros];
    } else{
      zeros[i + 1] = zeros[i] + "[0]";
    }
  }
  return array[zeros].innerHTML();
}

//  var criteriaFN = document.getElementsByTagName('div')[i];
//  breadthFirst(array, criteriaFN);
