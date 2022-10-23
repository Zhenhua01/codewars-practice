"use strict";

// Given an array of integers, find the one that appears an odd number of times.
// There will always be only one integer that appears an odd number of times.

function findOdd(A) {
  let freq = {};

  for (let num of A){
    freq[num] = (freq[num] + 1) || 1;
  }

  for (let key in freq){
    if (freq[key] % 2 !== 0) return +key;
  }
}