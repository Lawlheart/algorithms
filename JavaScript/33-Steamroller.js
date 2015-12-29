

// STEAMROLLER
// Flatten a nested list. You must account for varying levels of nesting.

function steamroller(arr) {
  // I'm a steamroller, baby
  return arr;
}

steamroller([1, [2], [3, [[4]]]]);

// TESTING
// steamroller([[["a"]], [["b"]]]) should return ["a", "b"].
// steamroller([1, [2], [3, [[4]]]]) should return [1, 2, 3, 4].
// steamroller([1, [], [3, [[4]]]]) should return [1, 3, 4].
// steamroller([1, {}, [3, [[4]]]]) should return [1, {}, 3, 4].