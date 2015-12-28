function repeat(str, num) {
  // repeat after me
  var response = "";
  if(num>0) {
    for(var i=0;i<num;i++) {
      response += str
    }
  }
  return response;
}

repeat('abc', 3);