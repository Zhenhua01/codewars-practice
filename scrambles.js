// Complete the function scramble(str1, str2) that returns true if a portion of
// str1 characters can be rearranged to match str2, otherwise returns false.

function scramble(str1, str2) {
  let freq1 = {};
  let freq2 = {};

  for (let char of str1) {
    freq1[char] = (freq1[char] + 1) || 1;
  }

  for (let char of str2) {
    freq2[char] = (freq2[char] + 1) || 1;
  }

  for (let key in freq2) {
    if (freq2[key] > (freq1[key] || 0)) return false;
  }

  return true;
}