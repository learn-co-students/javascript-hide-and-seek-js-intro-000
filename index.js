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
 const nodes = document.querySelectorAll('div#grand-node');
 const last = nodes[nodes.length- 1];
}
{
return last;
}
