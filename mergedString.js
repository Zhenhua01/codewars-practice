"use strict";

// You are challenged to write an algorithm to check if a
// given string, s, can be formed from two other strings, part1 and part2.

// The restriction is that the characters in part1 and part2 should be in the
// same order as in s.

function isMerge(s, part1, part2) {
  let list1 = part1.split("");
  let list2 = part2.split("");

  for (let letter of s) {
    if (letter === list1[0]) {
      list1.shift();
    } else if (letter === list2[0]) {
      list2.shift();
    } else {
      return false;
    }
  }

  return true;
}