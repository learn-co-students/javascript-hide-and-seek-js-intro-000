function getFirstSelector(selector) {

    //  Accepts a selector and returns the first element that matches.

    return document.querySelector(selector)
}


function nestedTarget() {

    // Pulls a `.target` out of `#nested`
    // This method should work with arbitrary elements.

    return getFirstSelector('#nested').querySelector('.target')
}

function increaseRankBy(n) {

    // Increases the ranks in all of the `.ranked-list`s by `n`.

    document.querySelectorAll(".ranked-list li").forEach((element) => {
        element.textContent = n + parseInt(element.textContent)
    })

}

function deepestChild() {
    // Pulls out the most deeply nested child
    // from `div#grand-node`.

    var root = document.querySelector('div#grand-node')

    do {
        if ( !root.children[0] ) {
            return root
        }
        root = root.children[0]
    } while (true)
}
