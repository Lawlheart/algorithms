

// SYMETRIC DIFFERENCE
// Create a function that takes two or more arrays and returns an array of the symmetric difference of the provided arrays.
// The mathematical term symmetric difference refers to the elements in two sets that are in either the first or second set, but not in both.

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

// TESTING
// sym([1, 2, 3], [5, 2, 1, 4]) should return [3, 5, 4].
// sym([1, 2, 5], [2, 3, 5], [3, 4, 5]) should return [1, 4, 5]
// sym([1, 1, 2, 5], [2, 2, 3, 5], [3, 4, 5, 5]) should return [1, 4, 5].
// sym([3, 3, 3, 2, 5], [2, 1, 5, 7], [3, 4, 6, 6], [1, 2, 3]) should return [ 7, 4, 6, 2, 3 ].