

// CHUNKY MONKEY
// Write a function that splits an array (first argument) into groups the length of size (second argument) and returns them as a multidimensional array.

function chunk(arr, size) {
  // Break it up.
  var newArray = [];
  for(var i=0;i<arr.length;i+=size) {
    var subArray = [];
    for(var j=0;j<size;j++) {
      if(arr[i+j] !== undefined) {
        subArray.push(arr[i+j])
      }
    }
    newArray.push(subArray)
  }
  arr = newArray
  console.log(arr)
  return arr;
}

chunk(['a', 'b', 'c', 'd'], 2);

// TESTING
// chunk(["a", "b", "c", "d"], 2) should return [["a", "b"], ["c", "d"]].
// chunk([0, 1, 2, 3, 4, 5], 3) should return [[0, 1, 2], [3, 4, 5]].
// chunk([0, 1, 2, 3, 4, 5], 2) should return [[0, 1], [2, 3], [4, 5]].
// chunk([0, 1, 2, 3, 4, 5], 4) should return [[0, 1, 2, 3], [4, 5]].