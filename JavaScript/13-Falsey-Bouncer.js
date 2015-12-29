

// FALSY BOUNCER
// Remove all falsy values from an array.

function bouncer(arr) {
  // Don't show a false ID to this bouncer.
  var newArr = []
  for(var i=0;i<arr.length;i++) {
    if(arr[i]) {
      newArr.push(arr[i]);
    }
  }
  arr=newArr;
  return arr;
}

bouncer([7, 'ate', '', false, 9]

// TESTING
// bouncer([7, "ate", "", False, 9]) should return [7, "ate", 9].
// bouncer(["a", "b", "c"]) should return ["a", "b", "c"].
// bouncer([False, null, 0, NaN, undefined, ""]) should return [].