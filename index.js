
function getFirstSelector(selector) {
  return document.querySelector(selector);
}
function nestedTarget() {
  return document.querySelector('#nested .target');
}
function increaseRankBy(n) {
  const lis = document.querySelectorAll('.ranked-list li');
  Array.prototype.forEach.call(lis, (e) => e.innerHTML = parseInt(e.innerHTML) + n);
}
function deepestChild() {
  const grandNode = document.querySelector('div#grand-node');
  let current = grandNode;
  let next = grandNode.querySelector('*');
  while (next != null) {
    current = next;
    next = next.querySelector('*');
  }
  return current;


}
