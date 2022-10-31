"use strict";

// Implement the function unique_in_order which takes as argument a sequence and
// returns a list of items without any elements with the same value next to each
// other and preserving the original order of elements.

function uniqueInOrder(iterable) {
  let newList = [];

  for (let val of iterable) {
    if (newList[newList.length - 1] !== val) newList.push(val);
  }

  return newList;
}