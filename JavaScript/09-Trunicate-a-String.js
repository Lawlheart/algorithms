

// TRUNCATE A STRING
// Truncate a string (first argument) if it is longer than the given maximum string length (second argument). Return the truncated string with a "..." ending.
// Note that the three dots at the end add to the string length.
// If the num is less than or equal to 3, then the length of the three dots is not added to the string length.

function truncate(str, num) {
  // Clear out that junk in your trunk
  if(str.length<=num) {
    return str
  }
  var trun = str.slice(0,num-3) + "..."
  return trun;
}

truncate('A-tisket a-tasket A green and yellow basket', 11);

// TESTING
// truncate("A-tisket a-tasket A green and yellow basket", 11) should return "A-tisket...".
// truncate("Peter Piper picked a peck of pickled peppers", 14) should return "Peter Piper...".
// truncate("A-tisket a-tasket A green and yellow basket", "A-tisket a-tasket A green and yellow basket".length) should return "A-tisket a-tasket A green and yellow basket".
// truncate("A-tisket a-tasket A green and yellow basket", "A-tisket a-tasket A green and yellow basket".length + 2) should return "A-tisket a-tasket A green and yellow basket".
// truncate("A-", 1) should return "A...".
// truncate("Absolutely Longer", 2) should return "Ab...".