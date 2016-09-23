function getFirstSelector(selector) {
  return document.querySelector(selector);
}

function nestedTarget() {
  return document.querySelector('#nested .target');
}

function increaseRankBy(n) {
  const item = document.querySelectorAll('.ranked-list')
  for (let i = 0, l = item.length; i < l; i++) {
    item[i].innerHTML = (parseInt(item[i].innerHTML) + n);
  }
 }

function recursive(node, depth) {
  if (node.nodeType !== 1) {//recursive case return item if item is an element
    return {node: node, depth: depth}
  }
  else {//recursive case return item if item is an element
    var deepestNode = node;
    var deepestDepth = depth;

    for (var i = 0; i < node.childNodes.length; i++) {//if the node is an element, having child nodes (or not)
      var output = recursive(node.childNodes[i], depth + 1);

      if (output.depth > deepestDepth) {
        deepestNode = output.node;
        deepestDepth = output.depth;
      }
    }
    return {node: deepestNode, depth: deepestDepth}
  }
}

function deepestChild() {
  const list = document.querySelector('#grand-node div');//returns a single node;
  const output = recursive(list, 0);
  return output.node.parentNode
}
