function getFirstSelector(selector) {
    return document.querySelector(selector)
}

function nestedTarget() {
    return getFirstSelector('#nested .target')
}

function deepestChild() {

    var lis = document.getElementById('grand-node');

    var deepestNode = lis.children[0];

    while (deepestNode) {
        lis = deepestNode
        deepestNode = lis.children[0]
    }
    return lis
}

function increaseRankBy(n) {
  var lis=document.getElementById("app").querySelectorAll("ul.ranked-list li");
  for(let i=0;i<lis.length;i++) {
    console.log(lis[i])
    lis[i].innerHTML=parseInt(lis[i].innerHTML)+n;
  }
}
