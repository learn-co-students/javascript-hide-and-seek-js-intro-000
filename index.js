let getFirstSelector = (selector) => document.querySelector(selector);
let nestedTarget = () => document.querySelector("#nested .target");
function increaseRankBy(n) {
  let listItems = document.querySelectorAll(".ranked-list li");
  var num = 0;
  for (let i=0;i<listItems.length;i++) {
    num = parseInt(listItems[i].innerHTML);
    num = num+n;
    listItems[i].innerHTML = num.toString();
  }
}
let deepestChild = () => document.querySelector("#grand-node div div div div");
