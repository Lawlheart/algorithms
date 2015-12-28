function inventory(arr1, arr2) {
  var arr = arr1.concat(arr2);
  arrMap = arr.map(function(obj) { return obj[1]});
  var newArr = arr.filter(function(item, pos) {
    if(arrMap.indexOf(item[1]) === pos) {
      return true;
    } else {
      var index = arrMap.indexOf(item[1]);
      arr[index][0] += item[0]; 
      return false;
    }
  }).sort(function(a,b) { return a[1]>b[1] })

  return newArr;
}

// Example inventory lists
var curInv = [
    [21, 'Bowling Ball'],
    [2, 'Dirty Sock'],
    [1, 'Hair Pin'],
    [5, 'Microphone']
];

var newInv = [
    [2, 'Hair Pin'],
    [3, 'Half-Eaten Apple'],
    [67, 'Bowling Ball'],
    [7, 'Toothpaste']
];

inventory(curInv, newInv);
