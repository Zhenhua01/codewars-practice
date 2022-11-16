"use strict";

// Complete the solution so that the function will break up camel casing,
// using a space between words.

function solution(string) {
  let newString = "";

  for (let char of string) {
    if (char.toUpperCase() === char) {
      newString += ` ${char}`;
    } else {
      newString += char;
    }
  }

  return newString;
}