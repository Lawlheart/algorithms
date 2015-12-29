

// SEEK AND DESTROY
// You will be provided with an initial list (the first argument in the destroyer function), followed by one or more arguments. Remove all elements from the initial list that are of the same value as these arguments.

function destroyer(arr) {
  // Remove all the values
  var newArr = []
  var aim = []
  for(var i=1; i<arguments.length; i++) {
    aim.push(arguments[i])
  }
  for(var i=0; i<arr.length; i++) {
    if(aim.indexOf(arr[i]) < 0 ) {
      newArr.push(arr[i]);
    }
  }
  arr = newArr;
  console.log(arr)
  return arr;
}

destroyer([1, 2, 3, 1, 2, 3], 2, 3);

// TESTING
// destroyer([1, 2, 3, 1, 2, 3], 2, 3) should return [1, 1].
// destroyer([1, 2, 3, 5, 1, 2, 3], 2, 3) should return [1, 5, 1].
// destroyer([3, 5, 1, 2, 2], 2, 3, 5) should return [1].
// destroyer([2, 3, 2, 3], 2, 3) should return [].
// destroyer(["tree", "hamburger", 53], "tree", 53) should return ["hamburger"].