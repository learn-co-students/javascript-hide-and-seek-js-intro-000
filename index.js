function getFirstSelector(selector) {
    return document.querySelector(selector)
}

function nestedTarget() {
    return document.querySelector('#nested .target')
}

function deepestChild() {
    return document.querySelector('#grand-node div div div div')
}

function increaseRankBy(num) {
    const parsed  = parseInt(num)
    const lists = document.querySelectorAll('.ranked-list')
    console.log(lists)
    let first = lists[0]
    let firstLis = first.querySelectorAll('li')
    let second = lists[1]
    let secondLis = second.querySelectorAll('li')
    // debugger;
    for(let i = 0; i < firstLis.length; i++) {
        let rank = parseInt(firstLis[i].innerHTML)
        let newRank = parsed + rank
        firstLis[i].innerHTML = `${newRank}`
    }
    for(let i = 0; i < secondLis.length; i++) {
        let rank = parseInt(secondLis[i].innerHTML)
        let newRank = parsed + rank
        secondLis[i].innerHTML = `${newRank}`
    }
}

// increaseRankBy(3)