

// ARGUMENTS OPTIONAL
// Create a function that sums two arguments together. If only one argument is provided, then return a function that expects one argument and returns the sum.
// For example, add(2, 3) should return 5, and add(2) should return a function.
// Calling this returned function with a single argument will then return the sum:
// var sumTwoAnd = add(2);
// sumTwoAnd(3) returns 5.
// If either argument isn't a valid number, return undefined.

function add() {
  return false;
}

add(2,3);

// TESTING
// add(2, 3) should return 5.
// add(2)(3) should return 5.
// add("http://bit.ly/IqT6zt") should return undefined.
// add(2, "3") should return undefined.
// add(2)([3]) should return undefined.