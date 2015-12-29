

// TITLE CASE A SENTENCE
// Return the provided string with the first letter of each word capitalized. Make sure the rest of the word is in lower case.
// For the purpose of this exercise, you should also capitalize connecting words like "the" and "of".

function titleCase(str) {
  var words = str.split(" ");
  for(var i=0;i<words.length;i++) {
    words[i] = words[i].charAt(0).toUpperCase() + words[i].slice(1).toLowerCase();
  }
  str = words.join(" ")
  return str;
}

titleCase("I'm a little tea pot");

// TESTING
// titleCase("I'm a little tea pot") should return a string.
// titleCase("I'm a little tea pot") should return "I'm A Little Tea Pot".
// titleCase("sHoRt AnD sToUt") should return "Short And Stout".
// titleCase("HERE IS MY HANDLE HERE IS MY SPOUT") should return "Here Is My Handle Here Is My Spout".