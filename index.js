

function getFirstSelector(selector) {

   return document.querySelector(selector)

}


function nestedTarget() {

    return document.querySelector('div.target')
}


function deepestChild() {

    return document.querySelector('div#grand-node div div div div')
}


function increaseRankBy(n) {

    var ranks = document.getElementById('app').querySelectorAll('ul.ranked-list li')

    for (let x = 0; x < ranks.length; x++) {

        ranks[x].innerHTML = Number.parseInt(ranks[x].innerHTML) + n  
debugger    
    }
    
}



