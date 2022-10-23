"use strict";

// You are given an array (which will have a length of at least 3, but could be
// very large) containing integers. The array is either entirely comprised of odd
// integers or entirely comprised of even integers except for a single integer N.
// Write a method that takes the array as an argument and returns this "outlier" N.

function findOutlier(integers) {
  let odds = [];
  let evens = [];

  while (odds.length < 2 && evens.length < 2) {
    for (let val of integers) {
      (val % 2 === 0) ? evens.push(val) : odds.push(val);
    }
  }

  return (odds.length < 2) ? odds[0] : evens[0];
}