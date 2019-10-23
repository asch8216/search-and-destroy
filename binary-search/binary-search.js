'use strict'

// Complete this algo
const binarySearch = (array, target) => {
  let middle = Math.floor(array.length / 2)
  if (array[middle] === target) return true

  if (array.length === 1 && array[0] !== target) {
    return false
  }

  if (array[middle] < target) {
    return binarySearch(array.slice(middle), target)
  } else if (array[middle] > target) {
    return binarySearch(array.slice(0, middle), target)
  }

  // let middle = Math.floor(array.length / 2)

  // while (array[middle] !== target) {
  //   if (middle === 0 || middle === array.length - 1) {
  //     return false
  //   } else if (target < array[middle]) {
  //     middle = Math.floor(middle / 2)
  //   } else if (target > array[middle]) {
  //     middle = Math.floor((middle + array.length) / 2)
  //   }
  // }

  // return true
}

/*
	EXTRA CREDIT:

	Can you augment the function above to run in constant O(1) space?
	This means, you cannot edit/copy the original array!
	How can we use other pieces of data, like pointers, to avoid slicing?

*/

module.exports = binarySearch
