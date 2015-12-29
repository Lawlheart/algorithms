

// Sum All Numbers in a Range
// We'll pass you an array of two numbers. Return the sum of those two numbers and all numbers between them.
// The lowest number will not always come first.

function sumAll(arr) {
  var sum = 0;
  arr = arr.sort(function(a, b){return a-b});
  for(var i=arr[0];i<=arr[1];i++) {
    sum += i;
  }
  return sum
}

sumAll([1, 4]);

// TESTING
// sumAll([1, 4]) should return a number.
// sumAll([1, 4]) should return 10.
// sumAll([4, 1]) should return 10.
// sumAll([5, 10]) should return 45.
// sumAll([10, 5]) should return 45.