import unittest

# ARGUMENTS OPTIONAL
# Create a function that sums two arguments together. If only one argument is provided, then return a function that expects one argument and returns the sum.
# For example, add(2, 3) should return 5, and add(2) should return a function.
# Calling this returned function with a single argument will then return the sum:
# var sumTwoAnd = add(2);
# sumTwoAnd(3) returns 5.
# If either argument isn't a valid number, return None.

def add(num1, num2):
	pass

class addTest(unittest.TestCase):
	def test(self):
		self.assertEqual(type(add(2, 3)), int)
		self.assertEqual(add(2, 3), 5)
		self.assertEqual(add(2)(3), 5)
		self.assertEqual(add("http://bit.ly/IqT6zt"), None)
		self.assertEqual(add(2, "3"), None)
		self.assertEqual(add(2)([3]), None)

if __name__ == '__main__':
	unittest.main()

# TESTING
# add(2, 3) should return 5.
# add(2)(3) should return 5.
# add("http://bit.ly/IqT6zt") should return None.
# add(2, "3") should return None.
# add(2)([3]) should return None.
