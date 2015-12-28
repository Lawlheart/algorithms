function drop(arr, func) {
  // Drop them elements.
  for(var i=0;i<arr.length;i++) {
    if(func(arr[i])) {
      return arr;
    } else {
      arr.shift();
      i--
    }
  }
  return arr;
}

console.log(drop([1, 2, 3, 4], function(n) {return n >= 3; }));
