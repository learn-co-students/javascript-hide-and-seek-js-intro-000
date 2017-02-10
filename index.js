function getFirstSelector(selector){
    var firstElem = document.querySelector(selector);
    return firstElem;
}

function nestedTarget(){
    var idTarget = document.querySelector('#nested .target');
    return idTarget;
}

function increaseRankBy(n){
    var allRank = document.querySelectorAll('.ranked-list li');
    for(let i=0, rankL = allRank.length; i < rankL; i++){
        var currVal = allRank[i].innerHTML;
        var rV = parseInt(currVal);
        allRank[i].innerHTML = rV +n;
    }
}

function deepestChild(){
    var findDeepChild = document.querySelector('#grand-node div div div div');
    return findDeepChild;
}
