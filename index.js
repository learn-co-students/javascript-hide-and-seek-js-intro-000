const getFirstSelector = (selector) =>{
  return document.querySelector(selector);
};
const nestedTarget = () =>{
 return document.getElementById('app').querySelector('div#nested div div div.target');
};


const increaseRankBy = (n)=>{
  
  let active = document.getElementById('app').querySelectorAll('ul.ranked-list li');
  
  let num = n;
  for (let i = 0; i < active.length; i++) {
  active[i].innerHTML = parseInt(active[i].innerHTML) + num;
  // return active
  }
  return active;
};


const deepestChild = () =>{
  return document.getElementById('app').querySelector('div#grand-node div div div div');
}; 
