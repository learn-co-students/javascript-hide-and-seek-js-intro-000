var getFirstSelector = selector =>
  {
    return document.querySelector(selector);
  }
var nestedTarget = () =>
  {
    return document.getElementById('nested').querySelector('div.target');
  }
var increaseRankBy = n =>
  {
    var list = document.getElementById('app').querySelectorAll('ul.ranked-list li')
       for (var i=0;i<list.length;i++)
       {
         list[i].innerHTML = parseInt(list[i].innerHTML) + n
       }
  }
var deepestChild = () =>
  {
    var deepest = document.getElementById('grand-node').querySelectorAll('div');
    return deepest[deepest.length-1];
  }
