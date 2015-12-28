function where(collection, source) {
  var arr = [];
  // What's in a name?
  for(var i=0;i<collection.length;i++) {
    var match = true;
    for(key in source) {
      console.log(!collection[i].hasOwnProperty(key), source[key] !== collection[i][key])
      if(!collection[i].hasOwnProperty(key) || source[key] !== collection[i][key]) {
         match = false;
      }
    }
    if(match) {
      arr.push(collection[i])
    }
  }
  console.log(arr)
  return arr;
}

where([{ 'a': 1, 'b': 2 }, { 'a': 1 }, { 'a': 1, 'b': 2, 'c': 2 }], { 'a': 1, 'b': 2 })