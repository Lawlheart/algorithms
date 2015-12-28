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