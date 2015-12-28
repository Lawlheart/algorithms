function where(arr, num) {
  // Find my place in this sorted array.
  var index = 0;
  for(var i=0; i<arr.length; i++) {
    if(num>arr[i]) {
      index += 1
    } 
  }
  return index
}
where([40, 60], 50);