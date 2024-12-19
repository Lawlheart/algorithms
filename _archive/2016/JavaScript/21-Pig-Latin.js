

// PIG LATIN
// Translate the provided string to pig latin.
// Pig Latin takes the first consonant (or consonant cluster) of an English word, moves it to the end of the word and suffixes an "ay".
// If a word begins with a vowel you just add "way" to the end.

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

// TESTING
// translate("california") should return "aliforniacay".
// translate("paragraphs") should return "aragraphspay".
// translate("glove") should return "oveglay".
// translate("algorithm") should return "algorithmway".
// translate("eight") should return "eightway".
