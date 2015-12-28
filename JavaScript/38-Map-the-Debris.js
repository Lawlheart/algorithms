function orbitalPeriod(arr) {
  var GM = 398600.4418;
  var earthRadius = 6367.4447;
  var arr = arr.map(function(obj) {
  	var newObj = {};
  	newObj.name = obj.name;
  	newObj.orbitalPeriod = Math.round(2 * Math.PI * Math.pow(Math.pow((obj.avgAlt+earthRadius), 3)/GM, 0.5));
  	return newObj;
  })
  return arr;
}

orbitalPeriod([{name : "sputnik", avgAlt : 35873.5553}]);