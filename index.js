function getFirstSelector(selector)
  {
    var test1 = document.querySelector(selector);
    return document.querySelector(selector);
  }

function nestedTarget()
  {
    return document.querySelector('#nested .target');
  }

function increaseRankBy(n)
  {
    var list = document.querySelectorAll('ul.ranked-list li')
      for (var i = 0; i < list.length; i++)
        {
          list[i].innerHTML = parseInt(list[i].innerHTML) + n;
        }
  }

  function deepestChild() {
    var theNode = document.querySelector('#grand-node')
    var nextNode = theNode.children[0];

    while (nextNode) {
      theNode = nextNode;
      nextNode = theNode.children[0];
    }
    return (theNode);
  }
