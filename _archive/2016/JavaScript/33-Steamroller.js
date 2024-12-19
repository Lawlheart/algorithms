

// STEAMROLLER
// Flatten a nested list. You must account for varying levels of nesting.

function steamroller(arr) {
  // I'm a steamroller, baby
  do {
  	var newArr = []
	  var flat = true;
	  for(var i=0;i<arr.length;i++) {
	    if(Array.isArray(arr[i])) {
	    	var flat = false;
	    	for(var j=0;j<arr[i].length;j++) {
	    		newArr.push(arr[i][j])
	    	}
	    } else {
	    	newArr.push(arr[i]);
	    }
	  }
	  arr = newArr
  } while(!flat)
  return arr;
}

steamroller([1, [2], [3, [[4]]]]);

// TESTING
// steamroller([[["a"]], [["b"]]]) should return ["a", "b"].
// steamroller([1, [2], [3, [[4]]]]) should return [1, 2, 3, 4].
// steamroller([1, [], [3, [[4]]]]) should return [1, 3, 4].
// steamroller([1, {}, [3, [[4]]]]) should return [1, {}, 3, 4].