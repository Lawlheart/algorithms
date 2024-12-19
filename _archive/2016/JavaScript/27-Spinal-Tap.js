

// SPINAL TAP CASE
// Convert a string to spinal case. Spinal case is all-lowercase-words-joined-by-dashes.

function spinalCase(str) {
  // "It's such a fine line between stupid, and clever."
  // --David St. Hubbins
  return str.replace(/(?!\s|^)+([A-Z])/g, "-$1").toLowerCase().replace(/\s|_/g, "-").replace(/--/g, "-");
}

spinalCase('This Is Spinal Tap');

// TESTING
// spinalCase("This Is Spinal Tap") should return "this-is-spinal-tap".
// spinalCase("thisIsSpinalTap") should return "this-is-spinal-tap".
// spinalCase("The_Andy_Griffith_Show") should return "the-andy-griffith-show".
// spinalCase("Teletubbies say Eh-oh") should return "teletubbies-say-eh-oh".