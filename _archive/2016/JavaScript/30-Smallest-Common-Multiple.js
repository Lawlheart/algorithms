

// SMALLEST COMMON MULTIPLE
// Find the smallest common multiple of the provided parameters that can be evenly divided by both, as well as by all sequential numbers in the range between these parameters.
// The range will be an array of two numbers that will not necessarily be in numerical order.

function smallestCommons(arr) {
  arr.sort(function(a, b){return a-b});
  for(var k=1;k>0;k++) {
    for(var i=arr[0];i<=arr[1];i++) {
      if(k%i > 0) {
        break;
      }
      if(i===arr[1]) {
        return k;
      }
    }
  }
}

smallestCommons([1,5]);

// TESTING
// smallestCommons([1, 5]) should return a number.
// smallestCommons([1, 5]) should return 60.
// smallestCommons([5, 1]) should return 60.
// smallestCommons([1, 13]) should return 360360.