function getFirstSelector(selector) {
  const a= document.querySelector(selector)
  return a
}

function nestedTarget(){
  const d= document
  .getElementById("nested").querySelector("div.target")
  return d
}

function increaseRankBy(n){
  const lis = document
  .querySelectorAll('.ranked-list');

        for (let i = 0; i < lis.length; i++) {
      lis[i].innerHTML = ((parseInt(lis[i].innerHTML)) + n)
    }

}

function deepestChild(){
  var deep = document.getElementById('grand-node').querySelectorAll('div')
  return deep[deep.length-1]

}
