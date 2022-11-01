"use strict";

// Implement "Math.round()", "Math.ceil()", "Math.floor()"

function mathRound(number) {
  let [int, fraction] = number.toString().split(".");

  if (fraction) {
    if (+fraction[0] >= 5) +int++;
  }

  return +int;
}

function mathCeil(number) {
  let [int, fraction] = number.toString().split(".");

  if (fraction) +int++;

  return +int;
}

function mathFloor(number) {
  let [int, fraction] = number.toString().split(".");

  return +int;
}