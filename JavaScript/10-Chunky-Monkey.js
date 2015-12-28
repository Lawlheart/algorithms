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