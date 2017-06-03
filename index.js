function getFirstSelector(selector) {
  return document.querySelector(selector);
}

function nestedTarget() {
  return document.querySelector("#nested .target")
}

function increaseRankBy(n) {
  var rankedNumbers = document.querySelectorAll("ul.ranked-list li");
  for(let i=0; i < rankedNumbers.length; i++) {
    rankedNumbers[i].innerHTML = parseInt(rankedNumbers[i].innerHTML) + n;
  }
}

function deepestChild() {
  return document.querySelector("#grand-node div div div div")
}
