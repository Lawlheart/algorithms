

// RETURN LARGEST NUMBERS IN ARRAYS
// Return an array consisting of the largest number from each provided sub-array. For simplicity, the provided array will contain exactly 4 sub-arrays.

function largestOfFour(arr) {
  // You can do this!
  var newArray = []
  for(var i=0;i<arr.length;i++) {
    var largest = 0;
    for(var j=0;j<arr[i].length;j++) {
      if(arr[i][j] > largest) {
        largest = arr[i][j];
      }
    }
    newArray.push(largest);
  }
  arr = newArray
  return arr;
}

largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);

// TESTING
// largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]) should return an array.
// largestOfFour([[13, 27, 18, 26], [4, 5, 1, 3], [32, 35, 37, 39], [1000, 1001, 857, 1]]) should return [27,5,39,1001].
// largestOfFour([[4, 9, 1, 3], [13, 35, 18, 26], [32, 35, 97, 39], [1000000, 1001, 857, 1]]) should return [9, 35, 97, 1000000].