function every(collection, pre) {
  // Does everyone have one of these?
  for(var i=0;i<collection.length;i++) {
    if(!collection[i].hasOwnProperty(pre)) {
      return false;
    }
  }
  return true;
}

every([{'user': 'Tinky-Winky', 'sex': 'male'}, {'user': 'Dipsy', 'sex': 'male'}, {'user': 'Laa-Laa', 'sex': 'female'}, {'user': 'Po', 'sex': 'female'}], 'sex');
