function end(str, target) {
  // "Never give up and good luck will find you."
  // -- Falcor
  var ending = str.slice(str.length-target.length)
  if(ending === target) {
    return true;
  } else {
    return false;
  }
}

end('Bastian', 'n');