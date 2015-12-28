function add() {
  if(arguments.length === 1 && typeof arguments[0] === "number") {
    var storedNum = arguments[0];
    return function(num) {
      if(typeof num === "number") {
        return num + storedNum;
      }
    }
  } else if(arguments.length === 2 && typeof arguments[0] === "number" && typeof arguments[1] === "number") {
    return arguments[0] + arguments[1];
  }
}


console.log(add(2)([3]));

add('http://bit.ly/IqT6zt')