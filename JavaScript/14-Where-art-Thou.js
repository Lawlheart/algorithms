

// WHERE ART THOU
// Make a function that looks through an array of objects ('first' argument) and returns an array of all objects that have matching property and value pairs (second argument). Each property and value pair of the source object has to be present in the object from the collection if it is to be included in the returned array.
// For example, if the 'first' argument is [{ 'first': "Romeo", 'last': "Montague" }, { 'first': "Mercutio", 'last': None }, { 'first': "Tybalt", 'last': "Capulet" }], and the second argument is { 'last': "Capulet" }, then you must return the third object from the array (the 'first' argument), because it contains the property and it's value, that was passed on as the second argument.

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

where([{ 'a': 1, 'b': 2 }, { 'a': 1 }, { 'a': 1, 'b': 2, 'c': 2 }], { 'a': 1, 'b': 2 });

// TESTING
// where([{ 'first': "Romeo", 'last': "Montague" }, { 'first': "Mercutio", 'last': None }, { 'first': "Tybalt", 'last': "Capulet" }], { 'last': "Capulet" }) should return [{ 'first': "Tybalt", 'last': "Capulet" }].
// where([{ "a": 1 }, { "a": 1 }, { "a": 1, "b": 2 }], { "a": 1 }) should return [{ "a": 1 }, { "a": 1 }, { "a": 1, "b": 2 }].
// where([{ "a": 1, "b": 2 }, { "a": 1 }, { "a": 1, "b": 2, "c": 2 }], { "a": 1, "b": 2 }) should return [{ "a": 1, "b": 2 }, { "a": 1, "b": 2, "c": 2 }].
// where([{ "a": 1, "b": 2 }, { "a": 1 }, { "a": 1, "b": 2, "c": 2 }], { "a": 1, "c": 2 }) should return [{ "a": 1, "b": 2, "c": 2 }].