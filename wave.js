"use strict";

// the wave: wave("hello") => ["Hello", "hEllo", "heLlo", "helLo", "hellO"]

function wave(str){
  let wave = [];

  for (let i = 0; i < str.length; i++){
    let letters = str.split("");
    if (letters[i] === " ") continue;
    
    letters.splice(i, 1, letters[i].toUpperCase());
    wave.push(letters.join(""));
  }

  return wave;
}