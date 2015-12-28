function truncate(str, num) {
  // Clear out that junk in your trunk
  if(str.length<=num) {
    return str
  }
  var trun = str.slice(0,num-3) + "..."
  return trun;
}

truncate('A-tisket a-tasket A green and yellow basket', 11);