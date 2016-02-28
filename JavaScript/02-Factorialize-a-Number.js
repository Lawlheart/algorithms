

// FACTORIALIZE A NUMBER
// Return the factorial of the provided integer.
// If the integer is represented with the letter n, a factorial is the product of all positive integers less than or equal to n.


function factorialize(num) {
  var factor = 0
  for(var i=1;i<=num;i++) {
    factor *= i;
  }
  return factor;
}

factorialize(5);

// TESTING
// factorialize(5) should return a number.
// factorialize(5) should return 120.
// factorialize(10) should return 3628800.
// factorialize(20) should return 2432902008176640000.
// factorialize(0) should return 1.