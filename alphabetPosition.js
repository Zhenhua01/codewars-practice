"use strict";

// In this kata you are required to, given a string, replace every letter with
// its position in the alphabet.

// If anything in the text isn't a letter, ignore it and don't return it.

function alphabetPosition(text) {
  let position = [];

  for (let i = 0; i < text.length; i++) {
    if (text.charCodeAt(i) >= 97 && text.charCodeAt(i) <= 122) {
      position.push(text.charCodeAt(i) - 96);
      
    } else if (text.charCodeAt(i) >= 65 && text.charCodeAt(i) <= 90) {
      position.push(text.charCodeAt(i) - 64);
    }
  }

  return position.join(" ");
}