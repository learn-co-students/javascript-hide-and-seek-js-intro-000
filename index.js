function getFirstSelector(selector) {
  const select = document.querySelector(selector); {
 
  }
  return select;
}


function nestedTarget() {
  const target = document.querySelector('div.target'); {
  }
  return target
}

function increaseRankBy(n) {
  const lis = document.querySelectorAll('.ranked-list'); {
    for (let i = 0; i < lis.length; i++) {
      lis[i].innerHTML = (parseInt(1,10) + n).toString();
    }
  }
  return lis;
}


function deepestChild() {
  let nodes = document.getElementById('grand-node'); 
    while (nodes.lastElementChild) {
      nodes = nodes.lastElementChild ;
    }
  return nodes; 
}
