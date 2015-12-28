function replace(str, before, after) {
  if(before[0] === before[0].toUpperCase()) {
    after = after[0].toUpperCase() + after.slice(1);
  }
  return str.replace(before, after);
}

replace("A quick brown fox jumped over the lazy dog", "jumped", "leaped");
