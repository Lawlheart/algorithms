

// MISSING LETTERS
// Find the missing letter in the passed letter range and return it.
// If all letters are present in the range, return undefined.

function fearNotLetter(str) {
  for(var i=1;i<str.length;i++) {
    var diff = str.charCodeAt(i) - str.charCodeAt(i-1)
    if(diff > 1) {
      return String.fromCharCode(str.charCodeAt(i) - 1)
    }
  }
}

fearNotLetter('abce');

// TESTING
// fearNotLetter("abce") should return "d".
// fearNotLetter("abcdefghjklmno") should return "i".
// fearNotLetter("bcd") should return None.
// fearNotLetter("yz") should return None.
