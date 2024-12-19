

// LONGEST WORD IN A STRING
// Return the length of the longest word in the provided sentence.
// Your response should be a number.

function findLongestWord(str) {
  return str.split(" ").reduce(function(a, b) {
    return a.length > b.length ? a : b;
  }).length;
}

findLongestWord('The quick brown fox jumped over the lazy dog');

// TESTING
// longestWord("The quick brown fox jumped over the lazy dog") should return a number.
// longestWord("The quick brown fox jumped over the lazy dog") should return 6.
// longestWord("May the force be with you") should return 5.
// longestWord("Google do a barrel roll") should return 6.
// longestWord("What is the average airspeed velocity of an unladen swallow") should return 8.
// longestWord("What if we try a super-long word such as otorhinolaryngology") should return 19.