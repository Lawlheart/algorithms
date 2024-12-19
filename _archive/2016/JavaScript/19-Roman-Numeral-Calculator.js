

// ROMAN NUMERAL CONVERTER
// Convert the given number into a roman numeral.
// All roman numerals answers should be provided in upper-case.

function convert(num) {
  var numerals = [["M",1000],["CM",900],["D",500],["CD",400],["C",100],["XC",90],["L",50],["XL",40],["X",10],["IX",9],["V",5],["IV",4],["I",1]];
  return numerals.map(function(n, i) {
    var rom = Array(Math.floor(num / n[1])).fill(n[0]).join("");
    num -= n[1] * Math.floor(num / n[1]);
    return rom;
  }).join("");
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