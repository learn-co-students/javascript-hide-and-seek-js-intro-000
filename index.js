function getFirstSelector(selector) {
    var element = document.querySelector(selector);
    return element;
};

function nestedTarget() {
    var element = document.querySelector(".target");
    return element;
};

function increaseRankBy(n) {
    var rank = document.getElementById("app").querySelectorAll("ul.ranked-list li")
    // var parsedRank = parseInt(rank);
    for (let i = 0; i < rank.length; i++) {
        rank[i].innerHTML = ((parseInt(rank[i].innerHTML))+ n);        
    }
    return n;
};

function deepestChild() {
    var element = document.getElementById("grand-node").querySelectorAll("div");
    return element[element.length - 1];
;}