function getFirstSelector(selector) {
    return document.querySelector(selector)
}

function nestedTarget() {
  //  const nested = document.getElementById('nested')
    return document.querySelector('#nested .target')
}

function deepestChild() {
    var el = document.getElementById("grand-node");
    var selectorString = "#grand-node ";
    while (el.children[0]) {
      selectorString += 'div ';
      el = el.children[0];
    }
    return document.querySelector(selectorString.trim());
}

function increaseRankBy(n) {
    const rankedLists = document.querySelectorAll('.ranked-list')
    debugger;
    for (let i = 0, l = rankedLists.length; i < l; i++) {
        var list = rankedLists[i].children;
        for (let j = 0, l2 = list.length; j < l2; j++) {
            list[j].innerHTML = (parseInt(list[j].innerHTML) + n).toString();
        }
    /*    rankedLists[i] = list */
    }

  /*  return rankedLists */
}
