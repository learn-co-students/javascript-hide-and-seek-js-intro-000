function getFirstSelector(selector)
{
  const ans=document.querySelector(selector);
  return ans;
}
function nestedTarget()
{
  const ans=document.getElementById('nested').querySelector('div.target');
  return ans;
}
function deepestChild(){
  var ans=document.getElementById('grand-node');
  var nextAns=ans.children[0];
    while(nextAns)
    {
      ans=nextAns;
      nextAns=ans.children[0];

    }
    return ans;
}

function increaseRankBy(n)
{
  var lis=document.querySelectorAll('ul.ranked-list li')
  for(let i=0;i<lis.length;i++)
  {
    var temp=parseInt(lis[i].innerHTML,10)+n;
    lis[i].innerHTML=temp.toString();

  }

}
