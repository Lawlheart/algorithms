

// ARGUMENTS OPTIONAL
// Create a function that sums two arguments together. If only one argument is provided, then return a function that expects one argument and returns the sum.
// For example, add(2, 3) should return 5, and add(2) should return a function.
// Calling this returned function with a single argument will then return the sum:
// var sumTwoAnd = add(2);
// sumTwoAnd(3) returns 5.
// If either argument isn't a valid number, return undefined.

function add() {
  if(arguments.length === 1 && typeof arguments[0] === "number") {
    var storedNum = arguments[0];
    return function(num) {
      if(typeof num === "number") {
        return num + storedNum;
      }
    }
  } else if(arguments.length === 2 && typeof arguments[0] === "number" && typeof arguments[1] === "number") {
    return arguments[0] + arguments[1];
  }
}


console.log(add(2)([3]));

add('http://bit.ly/IqT6zt')

// TESTING
// add(2, 3) should return 5.
// add(2)(3) should return 5.
// add("http://bit.ly/IqT6zt") should return undefined.
// add(2, "3") should return undefined.
// add(2)([3]) should return undefined.