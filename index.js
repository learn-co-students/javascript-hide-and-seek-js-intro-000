function getFirstSelector(selector) {
	return document.querySelector(selector);
}

function nestedTarget() {
	// return first element with id #nested; class .target
	return document.querySelector('#nested .target')
}

// querySelectorAll returns a NodeList of
// all matching elements with class '.ranked-list'
// NodeList objects are collections of nodes
// such as those returned by Node.childNodes
// and the document.querySelectorAll method.

// Although NodeList is not an Array, it is possible
// to iterate on it using forEach().
// Several older browsers have not implemented this method yet.

// In some cases, the NodeList is a live collection, which means that
// changes in the DOM are reflected in the collection.
function increaseRankBy(n) {
  var rankedLists = document.querySelectorAll(".ranked-list")

  // iterate through the NodeList
  for (var i=0, l = rankedLists.length; i < l; i++){

		// .children returns a live HTML collection of
		// the child elements of the Node
    var listItem = rankedLists[i].children

    // iterate thourhg HTML child nodes
    for (var j=0, m=listItem.length; j < m; j++) {

			// innerHTML dynamically updates the page
			// parseInt parses a string and returns an integer
			// n is argument passed to the function
      listItem[j].innerHTML = parseInt(listItem[j].innerHTML) + n
    }
  }
}

function deepestChild() {
  var node =  document.getElementById('grand-node');
  var next = node.children[0]; // sets next to NodeList


  while (next) { // steps through NodeList as long as it has children
    node = next; // sets node to the next element
    next = node.children[0]; // sets next to the NodeList child at idex [0];
  }  // exits loop when 'grand-node' no longer has children


  return node; // when loop ends, returns node value 'boo!'
}
