function getFirstSelector(selector) {
  return document.querySelector(selector);
}

function nestedTarget()
{
return document.querySelector(`#nested .target`)
}

function increaseRankBy(n)
{
  const theList = document.querySelectorAll(`.ranked-list`)

for (let i = 0; i < theList.length; i++)
{
  let theInnerList = theList[i].children

for (let f = 0; f < theInnerList.length; f++)
{
theInnerList[f].innerHTML = parseInt(theInnerList[f].innerHTML) + n
}
}
}


function deepestChild()
{
  let theNode = document.querySelector(`#grand-node`)

  while (theNode.firstElementChild != null)
  {
    theNode = theNode.firstElementChild
  }
  return theNode
}
