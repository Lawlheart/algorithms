function factorialize(num) {
  var factor = 0
  for(var i=1;i<=num;i++) {
    if(factor === 0 && i===1) {
      factor=1;
    } else {
      factor *= i
    }
  }
  return factor;
}

factorialize(5);