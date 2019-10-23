'use strict';

//Complete this algo
const isLoop = linkedlist => {
  let hashTable = {};
  let SearchNode = linkedlist.head;
  while (SearchNode) {
    if (SearchNode.value in hashTable) {
      return true;
    } else {
      hashTable[SearchNode.value] = true;
      SearchNode = SearchNode.next;
    }
  }
  return false;
};

/*
EXTRA CREDIT:

Write a function findLoop() that consumes a linkedlist with a loop
This function should return the Node value the loop begins at
Remember to write some test specs too!

*/
module.exports = isLoop;
