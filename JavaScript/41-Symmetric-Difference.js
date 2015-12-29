

// SYMETRIC DIFFERENCE
// Create a function that takes two or more arrays and returns an array of the symmetric difference of the provided arrays.
// The mathematical term symmetric difference refers to the elements in two sets that are in either the first or second set, but not in both.

function sym(args) {
  return args;
}

sym([1, 2, 3], [5, 2, 1, 4]);

// TESTING
// sym([1, 2, 3], [5, 2, 1, 4]) should return [3, 5, 4].
// sym([1, 2, 5], [2, 3, 5], [3, 4, 5]) should return [1, 4, 5]
// sym([1, 1, 2, 5], [2, 2, 3, 5], [3, 4, 5, 5]) should return [1, 4, 5].
// sym([3, 3, 3, 2, 5], [2, 1, 5, 7], [3, 4, 6, 6], [1, 2, 3]) should return [ 7, 4, 6, 2, 3 ].