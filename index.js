function getFirstSelector (selector) {
	return document.querySelector(selector)
}

function nestedTarget () {
	return document.querySelector('#nested .target')
}

function increaseRankBy (n) {
	var x = document.querySelectorAll('.ranked-list li')
	for (var i = 0, l = x.length; i < l; i++) {
		var rank = x[i].innerHTML
		var ranknumber = parseInt(rank)
		x[i].innerHTML = n + ranknumber
	}
}

function deepestChild() {
	var x = document.getElementById('grand-node').querySelectorAll('div')
	return x[x.length - 1]
}

