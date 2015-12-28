function convert(num) {
  var numerals = [["M",1000],["D",500],["C",100],["L",50],["X",10],["V",5],["I",1]];
  var subtractive = [["IIII", "IV"], ["VIIII", "IX"], ["VIV", "IX"] ,["XXXX", "XL"], ["LXXXX", "XC"], ["LXL", "XC"], ["CCCC", "CD"], ["DCCCC", "CM"], ["DCD", "CM"]];
  var output = "";
  for(var i=0;i<numerals.length;i++) {
    var letter = numerals[i][0];
    var value = numerals[i][1];
    if(num>=value) {
      var mutiples = Math.floor(num/value);
      for(var j=0;j<mutiples;j++) {
        output+=letter;
        num -= value;
      }
    }
  }
  for(var k=0;k<subtractive.length;k++) {
    if(output.indexOf(subtractive[k][0]) >=0) {
      output = output.replace(subtractive[k][0], subtractive[k][1]);
    }
  }
 return output;
}

convert(36);