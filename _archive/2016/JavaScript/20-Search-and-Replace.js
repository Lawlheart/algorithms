

// SEARCH AND REPLACE
// Perform a search and replace on the sentence using the arguments provided and return the new sentence.
// First argument is the sentence to perform the search and replace on.
// Second argument is the word that you will be replacing (before).
// Third argument is what you will be replacing the second argument with (after).
// NOTE: Preserve the case of the original word when you are replacing it. For example if you mean to replace the word "Book" with the word "dog", it should be replaced as "Dog"

function replace(str, before, after) {
  if(before[0] === before[0].toUpperCase()) {
    after = after[0].toUpperCase() + after.slice(1);
  }
  return str.replace(before, after);
}

replace("A quick brown fox jumped over the lazy dog", "jumped", "leaped");

// TESTING
// replace("Let us go to the store", "store", "mall") should return "Let us go to the mall".
// replace("He is Sleeping on the couch", "Sleeping", "sitting") should return "He is Sitting on the couch".
// replace("This has a spellngi error", "spellngi", "spelling") should return "This has a spelling error".
// replace("His name is Tom", "Tom", "john") should return "His name is John".
// replace("Let us get back to more Coding", "Coding", "bonfires") should return "Let us get back to more Bonfires".
