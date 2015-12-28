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
