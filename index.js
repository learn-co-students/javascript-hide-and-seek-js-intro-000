function getFirstSelector(selector)
{
  return document.querySelector(selector);
}

function nestedTarget()
{
  return document.querySelector("#nested .target")
}

function deepestChild()
{
  var nodes = document.querySelectorAll("body");
  var current = nodes
  var next = [].slice.call(current);
  var deepest;

    while (next[0])
    {
      next = [].slice.call(next, 1)
      deepest = current[0];
      for(var i=0; i<current.length; i++)
      {
        current = current[i].children
        for (var p=0; p<current.length; p++)
          next.push(current[p])
      }
      current = next;
    }
    return deepest
}

function increaseRankBy(n)
{
  var rl = document.getElementById('app').querySelectorAll('ul.ranked-list li')
  for (var i=0; i<rl.length; i++)
  {
    rl[i].innerHTML = (parseInt(rl[i].innerHTML, 10)+n).toString()
  }
}
