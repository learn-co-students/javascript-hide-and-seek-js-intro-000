function getFirstSelector(selector) {
	return document.querySelector(selector);
}

function nestedTarget() {
	return document.getElementById('nested').querySelector('.target');
}

function increaseRankBy(n) {
	var ranks = document.querySelectorAll('.ranked-list li');
	console.log('Ranks: %o', ranks);
	for (let i=0; i<ranks.length; i++) {
		console.log('Rank[%s] InnerHTML: %o', i, ranks[i].innerHTML);
		var rank = parseInt(ranks[i].innerHTML, 10) + n;
		console.log('rank: %s', rank);
		ranks[i].innerHTML = rank;
	}
}

function deepestChild() {
	var previous = document.getElementById('grand-node');

	while (true) {
		var current = previous.querySelector(' *');
		if (current === null) {
			return previous;
		}
		previous = current;
	}
}