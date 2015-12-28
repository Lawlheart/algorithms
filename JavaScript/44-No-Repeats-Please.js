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
// permAlone('aabb');
// permAlone('abcdefa');
// permAlone('abfdefa');
console.log(permAlone('zzzzzzzz'));