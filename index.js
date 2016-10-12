function getFirstSelector(selector) {
  return document.querySelectorAll(selector)[0];
}

function nestedTarget() {
  return document.getElementById('nested').querySelectorAll('.target')[0];
}

function increaseRankBy(n)
{
  const rankedList = document.querySelectorAll('.ranked-list');

  for (let i=0, l=rankedList.length; i<l; ++i)
  {
    const rankedListChildren = rankedList[i].children;
    for (let j=0, m=rankedListChildren.length; j<m; ++j)
      rankedListChildren[j].innerHTML = parseInt(rankedListChildren[j].innerHTML, 10) + n;
  }
}

var deepestLevel = 1;
var rootElem;

function deepestChild() {
  const elemList = document.querySelectorAll('div#grand-node');
  findRoot(elemList, deepestLevel);
  return rootElem;
}

function findRoot(list, level)
{
  if (list[0].children.length === 0)
  {
    if (level>deepestLevel)
    {
      deepestLevel=level;
      rootElem=list[0];
    }
    return;
  }
  ++level;
  for (let i=0, l=list.length; i<l; ++i)
    findRoot(list[i].children, level);
}
