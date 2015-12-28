function translate(str) {
  var vowels = ["a","e","i","o","u"];
  if(vowels.indexOf(str[0]) >= 0) {
    str = str + "way";
  } else {
    var index;
    for(var i=0;i<str.length;i++) {
      if(vowels.indexOf(str[i]) >= 0) {
        index = i;
        break;
      }
    }
    str = str.slice(index) + str.slice(0,index) + "ay"
  }
 return str;
}

translate("consonant");
