"use strict";

// You will be given an array of numbers. You have to sort the odd numbers in
// ascending order while leaving the even numbers at their original positions.

function sortArray(array) {
  const sortedOdds = array.filter(v => v % 2 !== 0).sort((a, b) => (a - b));
  let oddIdx = 0;

  for (let i = 0; i < array.length; i++) {
    if (array[i] % 2 !== 0) {
      array[i] = sortedOdds[oddIdx];
      oddIdx++;
    }
  }

  return array;
}
