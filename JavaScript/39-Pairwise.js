function pairwise(arr, arg) {
  var sum = 0;
  var used = []
  for(var i=0;i<arr.length;i++) {
    for(var j=0;j<arr.length;j++) {
      if(arr[i] + arr[j] === arg && i !== j && used.indexOf(i) < 0 && used.indexOf(j) < 0) {
        sum += (i + j);
        used.push(i);
        used.push(j);

      }
    }
  }
  return sum;
}


pairwise([1,4,2,3,0,5], 7); // expect 11
pairwise([1, 4, 2, 3, 0, 5], 7); // expect 11
pairwise([1, 3, 2, 4], 4); //expect 1
pairwise([1,1,1], 2); //expect 1
pairwise([0, 0, 0, 0, 1, 1], 1) // expect 10