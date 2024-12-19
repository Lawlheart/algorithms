

// Sum All Numbers in a Range
// We'll pass you an array of two numbers. Return the sum of those two numbers and all numbers between them.
// The lowest number will not always come first.

function sumAll(arr) {
  var r = arr.sort(function(a, b) { return a - b; });
  return Array(r[1] - r[0] + 1).fill(r[0]).reduce(function(a, b, i) {
    return a + b + i;
  });
}

sumAll([5, 10]);

// TESTING
// sumAll([1, 4]) should return a number.
// sumAll([1, 4]) should return 10.
// sumAll([4, 1]) should return 10.
// sumAll([5, 10]) should return 45.
// sumAll([10, 5]) should return 45.