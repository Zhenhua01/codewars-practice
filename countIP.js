"use strict";

// Implement a function that receives two IPv4 addresses, and returns the number
// of addresses between them (including the first one, excluding the last one).
// All inputs will be valid IPv4 addresses in the form of strings. The last
// address will always be greater than the first one.

function ipsBetween(start, end) {
  const startIP = start.split(".").map(v => +v);
  const endIP = end.split(".").map(v => +v);
  let count = 0;

  for (let i = 0; i < startIP.length; i++) {
    count += (endIP[i] - startIP[i]) * (256 ** (3 - i));
  }

  return count;
}