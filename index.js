function getFirstSelector( selector ) {
  return document.querySelector( selector );
}

function nestedTarget() {
  return document.querySelector('#nested .target');
}

function increaseRankBy( n ) {
	n = parseInt(n);
  const list = document.getElementById('app').querySelectorAll( 'ul.ranked-list li' );
  for ( let i = 0; i < list.length; i++ ) {
    var val = parseInt(list[i].innerHTML);
    list[i].innerHTML = val + n;
  }
}

function deepestChild() {
  return document.querySelector('#grand-node div div div div');
}
