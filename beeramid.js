"use strict";

// A beer can pyramid will square the number of cans in each level - 1 can in
// the top level, 4 in the second, 9 in the next, 16, 25... Complete the
// beeramid function to return the number of complete levels of a beer can
// pyramid you can make, given the parameters of: your referral bonus, and
// the price of a beer can

function beeramid(bonus, price) {
  let cost = 0;
  let level = 0;

  while (cost <= bonus) {
    level++;
    cost += ((level ** 2) * price);
  }
  if (level !== 0) level--;

  return level;
}