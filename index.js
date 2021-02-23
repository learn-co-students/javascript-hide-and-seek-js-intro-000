function getFirstSelector(selector) {
	return document.querySelector(selector);
}

function nestedTarget(nested, target) {
	return document.querySelector("#nested .target");
}

function increaseRankBy(n) { //class then tag 
	let lists = document.querySelectorAll(".ranked-list li");
	for (let i = 0, l = lists.length; i < l; i++) {
		let innerInt = parseInt(lists[i].innerHTML)
		innerInt = innerInt + n;
		lists[i].innerHTML = innerInt
	}
}

function deepestChild(div, grandnode) { //most deeply nested child element 
	//breadth first search 
    let nest = document.querySelector("div#grand-node");
    let next = nest.children[0]

    while (next) {
  	   nest = next;
  	   next = nest.children[0]
  	}

    return nest; 
}