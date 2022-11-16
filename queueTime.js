"use strict";

// There is a queue for the self-checkout tills at the supermarket. Your task
// is write a function to calculate the total time required for all the
// customers to check out!

// input:
// customers: an array of positive integers representing the queue. Each
// integer represents a customer, and its value is the amount of time they
// require to check out.
// n: a positive integer, the number of checkout tills.

function queueTime(customers, n) {
  let queueTime = Array.from({ length: n }).fill(0);

  for (let val of customers) {
    let minIdx = queueTime.indexOf(Math.min(...queueTime));

    queueTime[minIdx] += val;
  }

  return Math.max(...queueTime);
}