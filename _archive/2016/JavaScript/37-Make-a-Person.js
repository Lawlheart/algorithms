

// MAKE A PERSON
// Fill in the object constructor with the methods specified in the tests.
// Those methods are getFirstName(), getLastName(), getFullName(), setFirstName(first), setLastName(last), and setFullName(firstAndLast).
// All functions that take an argument have an arity of 1, and the argument will be a string.
// These methods must be the only available means for interacting with the object.

var Person = function(firstAndLast) {
  fullName = firstAndLast;
  firstName = fullName.slice(0,fullName.indexOf(" "));
  lastName = fullName.slice(fullName.indexOf(" ") + 1);
  this.getFullName = function() {
    return fullName;
  }
  this.getFirstName = function() {
    return firstName;
  }
  this.getLastName = function() {
    return lastName;
  }
  this.setFullName = function(firstAndLast) {
    fullName = firstAndLast;
  }
  this.setFirstName = function(first) {
    firstName = first;
    fullName = first + fullName.slice(fullName.indexOf(" "));
  }
  this.setLastName = function(last) {
    lastName = last;
    fullName = fullName.slice(0,fullName.indexOf(" ")) + " " + last;
  }
};

var bob = new Person('Bob Ross');

// TESTING
// Object.keys(bob).length should return 6.
// bob instanceof Person should return true.
// bob.firstName should return undefined.
// bob.lastName should return undefined.
// bob.getFirstName() should return "Bob".
// bob.getLastName() should return "Ross".
// bob.getFullName() should return "Bob Ross".
// bob.getFullName() should return "Haskell Ross" after bob.setFirstName("Haskell").
// bob.getFullName() should return "Haskell Curry" after bob.setLastName("Curry").
// bob.getFullName() should return "Haskell Curry" after bob.setFullName("Haskell Curry").
// bob.getFirstName() should return "Haskell" after bob.setFullName("Haskell Curry").
// bob.getLastName() should return "Curry" after bob.setFullName("Haskell Curry").