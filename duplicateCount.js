"use strict";

// Write a function that will return the count of distinct case-insensitive
// alphabetic characters and numeric digits that occur more than once in the
// input string. The input string can be assumed to contain only alphabets
// (both uppercase and lowercase) and numeric digits.

function duplicateCount(text) {
  const lowerCased = text.toLowerCase();
  let freq = {};

  for (let char of lowerCased) {
    freq[char] = (freq[char] + 1) || 1;
  }

  const filtered = Object.values(freq).filter(v => v > 1);

  return filtered.length;
}