function palindrome(str) {
  // Good luck!
  str = str.toLowerCase().replace(/[^a-z]/g,"")
  var rts = str.split("").reverse().join("");
  console.log(str, rts)
  if(str=== rts) {
    return true;
  } else {
    return false;
  }
}



palindrome("eye");