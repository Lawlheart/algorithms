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
