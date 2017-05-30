function getFirstSelector(selector) {
  return document.querySelector(selector);
}

function nestedTarget() {
  return document.getElementById('nested').querySelector('.target');
}

function increaseRankBy(n) {
    var els = document.getElementById('app').querySelectorAll('ul.ranked-list li');
    for (let i = 0; i < els.length; i++) {
    els[i].innerHTML = parseInt(els[i].textContent)+n;
    //console.log(res);
  }
}

function deepestChild() {
    //var len = document.getElementById('grand-node').childNodes.length;
    /*var el = document.getElementById('grand-node');
    el.querySelectorAll('div');
    return el.children[2].innerHTML;
    */
    Array.from(document.querySelectorAll("#grand-node div")).forEach(function(itm){
    return itm.innerHTML; //itm represents the individual element.
});
}
