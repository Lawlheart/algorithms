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
// bob.getFullName();
