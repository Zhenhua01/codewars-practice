"use strict";

// Write a function toWeirdCase (weirdcase in Ruby) that accepts a string, and
// returns the same string with all even indexed characters in each word upper
// cased, and all odd indexed characters in each word lower cased. The indexing
// just explained is zero based, so the zero-ith index is even, therefore that
// character should be upper cased and you need to start over for each word.

function toWeirdCase(string) {
  let words = string.split(" ");
  let weirdCase = "";

  for (let word of words) {
    let cased = "";
    for (let i = 0; i < word.length; i++) {
      if (i % 2 === 0) {
        cased += word[i].toUpperCase();
      } else {
        cased += word[i];
      }
    }
    weirdCase += ` ${cased}`;
  }

  return weirdCase.slice(1);
}