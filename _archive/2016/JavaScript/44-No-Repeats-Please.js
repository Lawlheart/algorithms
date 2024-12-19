

// NO REPEATS PLEASE
// Return the number of total permutations of the provided string that don't have repeated consecutive letters.
// For example, 'aab' should return 2 because it has 6 total permutations, but only 2 of them don't have the same letter (in this case 'a') repeating.

function perm(item, mem) {
  if(item.length === 0) {
  	console.log("pushing")
    perms.push(mem.join(''));
    return
  }
  for(var i=0;i<item.length;i++) {
    var x = item.splice(i,1);
    mem.push(x);
    perm(item, mem);
    mem.pop();
    item.splice(i,0,x)
  }
};

function permAlone(str) {
	console.log("starting build");
	perms = [];
	var arr = str.split("");
	if(arr.filter(function(item, pos) {
		return arr.indexOf(item) == pos;
	}).length === 1) {
		return 0;
	}
	perm(arr, []);
	perms = perms.filter(function(item) {
		var doubles = false;
		for(var i=0;i<item.length-1;i++) {
			if(item[i] === item[i+1]) {
				doubles = true;
			}
		}
		return !doubles;
	})
	console.log(perms)
  return perms.length;
}



permAlone('abdd');


// TESTING
// permAlone("aab") should return a number.
// permAlone("aab") should return 2.
// permAlone("aaa") should return 0.
// permAlone("aabb") should return 8.
// permAlone("abcdefa") should return 3600.
// permAlone("abfdefa") should return 2640.
// permAlone("zzzzzzzz") should return 0.