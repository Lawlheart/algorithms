function fearNotLetter(str) {
  for(var i=1;i<str.length;i++) {
    var diff = str.charCodeAt(i) - str.charCodeAt(i-1)
    if(diff > 1) {
      return String.fromCharCode(str.charCodeAt(i) - 1)
    }
  }
}

fearNotLetter('abce');
