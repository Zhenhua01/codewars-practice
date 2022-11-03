"use strict";

// Given a string of words, you need to find the highest scoring word.
// Each letter of a word scores points according to its position in the
// alphabet: a = 1, b = 2, c = 3 etc.
// You need to return the highest scoring word as a string.

function high(x) {
  let words = x.split(" ");
  let scores = [];

  for (let word of words) {
    let score = 0;
    for (let i = 0; i < word.length; i++) {
      score += word.charCodeAt(i) - 96;
    }
    scores.push(score);
  }

  let highScore = Math.max(...scores);
  let index = scores.indexOf(highScore);

  return words[index];
}