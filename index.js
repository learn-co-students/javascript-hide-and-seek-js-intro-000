function getFirstSelector(selector)
{
  return document.querySelector(selector)
}

function nestedTarget()
{
  return document.querySelector(`#nested .target`)
}

function deepestChild()
{
  var current = document.querySelector(`#grand-node`)
  while(current.children[0] != undefined)
  {
    current = current.children[0]
  }
  return current
}

function increaseRankBy(n)
{
  var arr = document.querySelectorAll(`ul.ranked-list li`);
  for (let i = 0; i < arr.length; i += 1)
  {
    arr[i].innerHTML = ((parseInt(arr[i].innerHTML) + n).toString());
  }
}
