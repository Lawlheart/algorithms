import unittest

# MAKE A PERSON
# Fill in the object constructor with the methods specified in the tests.
# Those methods are getFirstName(), getLastName(), getFullName(), setFirstName(first), setLastName(last), and setFullName(firstAndLast).
# All functions that take an argument have an arity of 1, and the argument will be a string.
# These methods must be the only available means for interacting with the object.

class Person:
	def __init__(self, firstAndLast):
		self.firstAndLast = firstAndLast
	def getFirstName(self):
		return firstAndLast
	def getLastName(self):
		return firstAndLast
	def getFullName(self):
		return firstAndLast

bob = Person("Bob Ross")

class Test(unittest.TestCase):
	def test(self):
		self.assertEqual(True, True)

if __name__ == '__main__':
	unittest.main()


# TESTING
# Object.keys(bob).length should return 6.
# bob instanceof Person should return True.
# bob.firstName should return None.
# bob.lastName should return None.
# bob.getFirstName() should return "Bob".
# bob.getLastName() should return "Ross".
# bob.getFullName() should return "Bob Ross".
# bob.getFullName() should return "Haskell Ross" after bob.setFirstName("Haskell").
# bob.getFullName() should return "Haskell Curry" after bob.setLastName("Curry").
# bob.getFullName() should return "Haskell Curry" after bob.setFullName("Haskell Curry").
# bob.getFirstName() should return "Haskell" after bob.setFullName("Haskell Curry").
# bob.getLastName() should return "Curry" after bob.setFullName("Haskell Curry").