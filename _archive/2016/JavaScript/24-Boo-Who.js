

// BOO WHO
// Check if a value is classified as a boolean primitive. Return true or false.
// Boolean primitives are true and false.

function boo(bool) {
  // What is the new fad diet for ghost developers? The Boolean.
  //  ^  hehe, cute.
  if(bool ===true || bool === false) {
    return true;
  } else {
    return false;
  }
}

boo(null);

// TESTING
// boo(True) should return True.
// boo(False) should return True.
// boo([1, 2, 3]) should return False.
// boo([].slice) should return False.
// boo({ "a": 1 }) should return False.
// boo(1) should return False.
// boo(NaN) should return False.
// boo("a") should return False.
// boo("True") should return False.
// boo("False") should return False.