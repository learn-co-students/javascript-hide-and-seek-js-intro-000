
function getFirstSelector(selector) {
   return document.querySelector(selector)[0];
}

function nestedTarget() {
  const elements = document.querySelector('#nested.target');
  return elements;
}
