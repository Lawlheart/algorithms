function mutation(arr) {
  var str = arr[0].toLowerCase();
  var letters = arr[1].toLowerCase().split("");
  
  for(var i=0;i<letters.length;i++) {
    if(str.indexOf(letters[i])<0) {
      return false
    }
  }
  
  return true;
}

mutation(['hello', 'hey']);