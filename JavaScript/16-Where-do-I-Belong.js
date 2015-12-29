

// WHERE DO I BELONG
// Return the lowest index at which a value (second argument) should be inserted into an list (first argument) once it has been sorted.
// For example, where([1,2,3,4], 1.5) should return 1 because it is greater than 1 (index 0), but less than 2 (index 1).
// Likewise, where([20,3,5], 19) should return 2 because once the list has been sorted it will look like [3,5,20] and 19 is less than 20 (index 2) and greater than 5 (index 1).

function where(arr, num) {
  // Find my place in this sorted array.
  return num;
}

where([40, 60], 50);

// TESTING
// where([10, 20, 30, 40, 50], 35) should return 3.
// where([10, 20, 30, 40, 50], 30) should return 2.
// where([40, 60], 50) should return 1.
// where([3, 10, 5], 3) should return 0.
// where([5, 3, 20, 3], 5) should return 2.
// where([2, 20, 10], 19) should return 2.
// where([2, 5, 10], 15) should return 3.