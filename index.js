function getFirstSelector(selector){
  return document.querySelector(selector);
}

function nestedTarget(){
  document.getElementById('nested').getElementsByClassName('target');
}

function increaseRankBy(n){
  //.rank-list += n;
}

function deepestChild(){
  //return querySelector(div#grand-node).querySelectorAll();
}


/*
  describe('deepestChild()', () => {
    it('returns the most deeply nested child in #grand-node', () => {
      console.log(deepestChild().innerHTML)
      expect(deepestChild()).to.equal(document.querySelector('#grand-node div div div div'))
    })
  })

  describe('increaseRankBy(n)', () => {
    it('increases ranks in .ranked-list by n', () => {
      increaseRankBy(3)

      const rankedLists = document.querySelectorAll('.ranked-list')
      const firstList = rankedLists[0]
      const secondList = rankedLists[1]

      let children = firstList.children
      let start = 1

      expect(children.length).to.equal(2);
      for (let i = 0, l = children.length; i < l; i++) {
        expect(parseInt(children[i].innerHTML)).to.equal(start + i + 3)
      }

      children = secondList.children
      start = 12

      expect(children.length).to.equal(3);
      for (let i = 0, l = children.length; i < l; i++) {
        expect(parseInt(children[i].innerHTML)).to.equal(start - i + 3)
      }
    })
  })
})*/
