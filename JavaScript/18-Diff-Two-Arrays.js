function diff(arr1, arr2) {
  arr = arr1.concat(arr2).filter(function(value) {
    if(arr1.indexOf(value) < 0 || arr2.indexOf(value) < 0 ) {
      return true;
    }
  });
  
  return arr;
}

diff([1, 2, 3, 5], [1, 2, 3, 4, 5]);