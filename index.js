function getFirstSelector(selector)
{
  return document.getElementById('app').querySelector(selector);
}

function nestedTarget()
{
    return document.getElementById('app').querySelector('#nested .target');
}

function increaseRankBy(n)
{
  const lis=document.getElementById('app').querySelectorAll('ul.ranked-list li');
  for (let i = 0; i < lis.length; i++) {
  lis[i].innerHTML = (parseInt(lis[i].innerHTML) + n).toString();
  }
}

function deepestChild()
{
  return document.getElementById('app').querySelector('div#grand-node div div div div');
}
