

// SUM ALL PRIMES
// Sum all the prime numbers up to and including the provided number.
// A prime number is defined as having only two divisors, 1 and itself. For example, 2 is a prime number because it's only divisible by 1 and 2. 1 isn't a prime number, because it's only divisible by itself.
// The provided number may not be a prime.

function sumPrimes(num) {
  var primes = [];
  for(var i=2;i<=num;i++) {
    var prime = true;
    for(var j=2;j<i;j++) {
      if(i%j === 0) {
        prime = false;
      }
    }
    if(prime) {
      primes.push(i);
    }
  }
  var sum = 0;
  for(var k=0;k<primes.length;k++) {
  	sum += primes[k];
  }
  return sum;
}

sumPrimes(100);

// TESTING
// sumPrimes(10) should return a number.
// sumPrimes(10) should return 17.
// sumPrimes(977) should return 73156.