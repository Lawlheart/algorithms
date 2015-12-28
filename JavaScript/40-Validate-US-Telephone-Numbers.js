function telephoneCheck(str) {
  // Good luck!
  var digits = str.replace(/\D/g, "").length;
  if(digits === 10 || (digits === 11 && str[0] == 1)) {
  	var re = new RegExp(/1?\s?\(?\d{3}[\s|\-|\)]?\s?\d{3}[\s|\-]?\d{4}$/);
  	if(re.test(str)) {
      return true;
    }
  } 
  return false;
}

/1?\s?\(?\d{3}[\s|\-|\)]?\s?\d{3}[\s|\-]?\d{4}/



telephoneCheck("555-555-5555");
telephoneCheck("(555)555-5555");
telephoneCheck("2(757)622-7382");
telephoneCheck("10 (757) 622-7382");
telephoneCheck("123**&!!asdf#");
telephoneCheck("1 555-555-5555");
telephoneCheck("1 (555) 555-5555");