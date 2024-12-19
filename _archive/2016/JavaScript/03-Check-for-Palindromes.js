

// CHECK FOR PALINDROMES
// Return true if the given string is a palindrome. Otherwise, return false.
// A palindrome is a word or sentence that's spelled the same way both forward and backward, ignoring punctuation, case, and spacing.
// You'll need to remove all non-alphanumeric characters (punctuation, spaces and symbols) and turn everything lower case in order to check for palindromes.

function palindrome(str) {
  var s = str.toLowerCase().replace(/[^a-z0-9]/g,"");
  return s === s.split("").reverse().join("");
}



palindrome("eye");

// TESTING
// palindrome("eye") should return a boolean.
// palindrome("eye") should return true.
// palindrome("race car") should return true.
// palindrome("not a palindrome") should return false.
// palindrome("A man, a plan, a canal. Panama") should return true.
// palindrome("never odd or even") should return true.
// palindrome("nope") should return false.
// palindrome("almostomla") should return false.
// palindrome("My age is 0, 0 si ega ym.") should return true.
// palindrome("1 eye for of 1 eye.") should return false.
// palindrome("0_0 (: /-\ :) 0-0") should return true.