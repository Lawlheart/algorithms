function slasher(arr, howMany) {
  // it doesn't always pay to be first
  arr = arr.slice(howMany)
  return arr;
}

slasher([1, 2, 3], 2);