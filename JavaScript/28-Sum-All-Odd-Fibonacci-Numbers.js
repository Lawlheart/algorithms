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