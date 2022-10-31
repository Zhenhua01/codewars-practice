"use strict";

// Eureka: We need a function to collect these numbers, that may receive two integers
// a, b that defines the range [a, b] (inclusive) and outputs a list of the
// sorted numbers in the range that fulfills the property described above.
// If there are no numbers of this kind in the range [a, b] the function should
// output an empty list.

function sumDigPow(a, b) {
  let list = [];

  for (let i = a; i <= b; i++) {
    let numStr = i.toString();
    let sum = 0;

    for (let j = 0; j < numStr.length; j++) {
      sum += ((+numStr[j]) ** (j + 1));
    }

    if (i === sum) list.push(i);
  }

  return list;
}
