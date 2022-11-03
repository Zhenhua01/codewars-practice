"use strict";

// You are going to be given an array of integers. Your job is to take that array
// and find an index N where the sum of the integers to the left of N is equal
// to the sum of the integers to the right of N. If there is no index that would
// make this happen, return -1.

function findEvenIndex(arr) {
  for (let i = 0; i < arr.length; i++) {
    let leftSide = arr.slice(0, i);
    let rightSide = arr.slice(i + 1);

    let leftSum = 0;
    let rightSum = 0;

    for (let val of leftSide) {
      leftSum += val;
    }

    for (let val of rightSide) {
      rightSum += val;
    }

    if (leftSum === rightSum) return i;
  }

  return -1;
}