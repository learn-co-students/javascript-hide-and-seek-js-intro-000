
let getFirstSelector = (sel) => {
   return document.querySelector(`${sel}`);
};







let nestedTarget = () => {
    return document.getElementsByTagName('div')[4];
};





let deepestChild = () => {
return document.querySelector("#grand-node div div div div")
};






let increaseRankBy = (n) => {

let rankedList = document
    .getElementById("app")
    .querySelectorAll("ul.ranked-list li");

    for (let i = 0; i < rankedList.length; i++) {
        let textContent = Number(rankedList[i].textContent)
    rankedList[i].innerHTML = (textContent + n).toString();
    
    }
};