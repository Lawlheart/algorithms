

// CHUNKY MONKEY
// Write a function that splits an array (first argument) into groups the length of size (second argument) and returns them as a multidimensional array.

function chunk(arr, size) {
  return arr.filter(function(c, i) {
    return i % size === 0;
  }).map(function(c, i) {
    return arr.slice(i * size, (i * size) + size);
  });
}

chunk(['a', 'b', 'c', 'd'], 2);

// TESTING
// chunk(["a", "b", "c", "d"], 2) should return [["a", "b"], ["c", "d"]].
// chunk([0, 1, 2, 3, 4, 5], 3) should return [[0, 1, 2], [3, 4, 5]].
// chunk([0, 1, 2, 3, 4, 5], 2) should return [[0, 1], [2, 3], [4, 5]].
// chunk([0, 1, 2, 3, 4, 5], 4) should return [[0, 1, 2, 3], [4, 5]].