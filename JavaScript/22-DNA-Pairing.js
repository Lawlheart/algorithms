function pair(str) {
  var key = [["A","T"],["T","A"],["C","G"],["G","C"]];
  var arr = []
  for(var i=0;i<str.length;i++) {
    for(var j=0;j<key.length;j++) {
      if(str[i] === key[j][0]) {
        arr.push(key[j]);
      }
    }
  }
 return arr;
}

pair("GCG");
