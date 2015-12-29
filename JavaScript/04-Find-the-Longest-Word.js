

// LONGEST WORD IN A STRING
// Return the length of the longest word in the provided sentence.
// Your response should be a number.

function findLongestWord(str) {
  var longest = 0;
  var words = str.split(" "); 
  for(var i=0;i<words.length;i++) {
    if(words[i].length>longest) {
      longest = words[i].length;
    }
  }
  return longest;
}

findLongestWord('The quick brown fox jumped over the lazy dog');

// TESTING
// longestWord("The quick brown fox jumped over the lazy dog") should return a number.
// longestWord("The quick brown fox jumped over the lazy dog") should return 6.
// longestWord("May the force be with you") should return 5.
// longestWord("Google do a barrel roll") should return 6.
// longestWord("What is the average airspeed velocity of an unladen swallow") should return 8.
// longestWord("What if we try a super-long word such as otorhinolaryngology") should return 19.