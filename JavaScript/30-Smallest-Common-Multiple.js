function smallestCommons(arr) {
  arr.sort(function(a, b){return a-b});
  for(var k=1;k>0;k++) {
    for(var i=arr[0];i<=arr[1];i++) {
      if(k%i > 0) {
        break;
      }
      if(i===arr[1]) {
        return k;
      }
    }
  }
}

smallestCommons([1,5]);
