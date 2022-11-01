"use strict";

// multiply two numbers passed as strings (a,b),
// return as a string in decimal form, keep all digits from math operations

// function multiply(a, b) {
//   let productStr = (+a * +b).toString();

//   if (productStr.includes("e+")){
//     let [str1, str2] = (productStr.split("e+"));

//     return str1.split(".").join("").padEnd(str2, "0");

//   } else {
//     return productStr;
//   }

// }

function multiply(a, b) {
  return (BigInt(a) * BigInt(b)).toString();
}
