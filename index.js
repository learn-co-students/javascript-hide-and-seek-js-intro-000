function getFirstSelector(selector) {
    return (document.querySelector(selector));
}

function nestedTarget() {
    return (document.querySelector('#nested .target'));
}

function increaseRankBy(n) {
    var listNumbers = document.getElementById('app').querySelectorAll('ul.ranked-list li')
    debugger;
    var l = listNumbers.length;
    for (var i = 0; i < l; i++) {
        var newNumber = (parseInt(listNumbers[i].innerHTML)) + n;
        listNumbers[i].innerHTML = newNumber.toString();
    }
}


function deepestChild() {
    var divs = document.getElementById('grand-node').querySelectorAll('div');
    return(divs[divs.length - 1]);
}