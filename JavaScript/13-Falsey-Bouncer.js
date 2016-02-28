

// FALSY BOUNCER
// Remove all falsy values from an array.

function bouncer(arr) {
  return arr.filter(function(item) {
    return Boolean(item);
  });
}

bouncer([7, 'ate', '', false, 9]);

// TESTING
// bouncer([7, "ate", "", False, 9]) should return [7, "ate", 9].
// bouncer(["a", "b", "c"]) should return ["a", "b", "c"].
// bouncer([False, null, 0, NaN, undefined, ""]) should return [].