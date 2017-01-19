//Define a function getFirstSelector(selector), which accepts a selector and returns the first element that matches.

function getFirstSelector(selector) {
  const element = document.querySelector(selector)
  return element
}

//Define a function nestedTarget() that pulls a .target out of #nested (# is used for IDs in selectors — but you knew that because you read the docs, right? :) ). (Note that in index.html #nested and .target just happen to be divs. This method should work with arbitrary elements.)

function nestedTarget() {
  const target = document.querySelector('div#nested div.target')
  return target
}
//Define a function increaseRankBy(n) that increases the ranks in all of the .ranked-lists by n. (You might need to make use of parseInt()

function increaseRankBy(n) {
  //pull them and increase the numbers within the li tags by n
  var ranks = document.querySelectorAll('li')

  for (let i=0; i<ranks.length; i ++) {
    ranks[i].innerHTML = parseInt(ranks[i].innerHTML, 10) +n
  }

  return ranks
}

//Define a function deepestChild() that pulls out the most deeply nested child from div#grand-node. (Remember, you can iterate over elements and call querySelector() and querySelectorAll() on them. This is challenging to implement correctly, but not beyond your ability!)

function deepestChild() {
  var node = document.querySelector('div#grand-node')

  while (node.children[0]) {
    node = node.children[0]
  }
  return node
}
