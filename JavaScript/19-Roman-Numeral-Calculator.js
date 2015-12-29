

// ROMAN NUMERAL CONVERTER
// Convert the given number into a roman numeral.
// All roman numerals answers should be provided in upper-case.

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

// TESTING
// convert(5) should return "V".
// convert(9) should return "IX".
// convert(12) should return "XII".
// convert(16) should return "XVI".
// convert(29) should return "XXIX".
// convert(44) should return "XLIV".
// convert(45) should return "XLV"
// convert(68) should return "LXVIII"
// convert(83) should return "LXXXIII"
// convert(97) should return "XCVII"
// convert(99) should return "XCIX"
// convert(500) should return "D"
// convert(501) should return "DI"
// convert(649) should return "DCXLIX"
// convert(798) should return "DCCXCVIII"
// convert(891) should return "DCCCXCI"
// convert(1000) should return "M"
// convert(1004) should return "MIV"
// convert(1006) should return "MVI"
// convert(1023) should return "MXXIII"
// convert(2014) should return "MMXIV"
// convert(3999) should return "MMMCMXCIX"