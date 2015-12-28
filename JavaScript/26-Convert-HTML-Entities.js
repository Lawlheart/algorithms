function convert(str) {
  // &colon;&rpar;
  var key = [["&", "&amp;"], ["<","&lt;"], [">","&gt;"], ["\"","&quot;"], ["'","&apos;"]];
  for(var i=0;i<key.length;i++) {
    var re = new RegExp("[" + key[i][0] + "]", "g");
    str = str.replace(re, key[i][1]);
    
  }
  return str;
}

convert('Dolce & Gabbana');
