function sym(args) {
	var merges = arguments.length - 1;
	var i = 1
	var arr = arguments[0]
	arr = arr.filter(function(item, pos) {
  	return arr.indexOf(item) == pos;
	});
	while(merges > 0) {
		var arr2 = arguments[i];
		arr2 = arr2.filter(function(item, pos) {
    	return arr2.indexOf(item) == pos;
		});
		var newArr = arr.filter(function(item, pos) {
			return arr2.indexOf(item) < 0;
		}).concat(arr2.filter(function(item, pos) {
			return arr.indexOf(item) < 0;
		}));
		arr = newArr;
		merges --;
		i ++;
	}
  return arr;
}

sym([1, 2, 3], [5, 2, 1, 4]);
sym([1, 2, 5], [2, 3, 5], [3, 4, 5]);