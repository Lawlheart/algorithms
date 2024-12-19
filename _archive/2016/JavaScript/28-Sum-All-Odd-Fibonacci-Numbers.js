

// SUM ALL ODD FIBONACCI NUMBERS
// Return the sum of all odd Fibonacci numbers up to and including the passed number if it is a Fibonacci number.
// The first few numbers of the Fibonacci sequence are 1, 1, 2, 3, 5 and 8, and each subsequent number is the sum of the previous two numbers.
// As an example, passing 4 to the function will return 5 because all the odd Fibonacci numbers under 4 are 1, 1, and 3.

function sumFibs(num) {
	var fibs = [1,1];
	var sum = 0;
	while(fibs[fibs.length-1] + fibs[fibs.length-2] <= num) {
		fibs.push(fibs[fibs.length-1] + fibs[fibs.length-2])
	}
	for(var i=0;i<fibs.length;i++) {
		if(fibs[i]%2 === 1) {
			sum += fibs[i];
		}
	}
	return sum
}

sumFibs(100);

// TESTING
// sumFibs(1) should return a number.
// sumFibs(1000) should return 1785.
// sumFibs(4000000) should return 4613732.
// sumFibs(4) should return 5.
// sumFibs(75024) should return 60696.
// sumFibs(75025) should return 135721.