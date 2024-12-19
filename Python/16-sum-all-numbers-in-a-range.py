import unittest

# Sum All Numbers in a Range
# We'll pass you an array of two numbers. Return the sum of those two numbers and all numbers between them.
# The lowest number will not always come first.

def sumAll(lis):
	pass

class sumAllTest(unittest.TestCase):
	def test(self):
		self.assertEqual(type(sumAll([1,4])), int)
		self.assertEqual(sumAll([1, 4]), 10)
		self.assertEqual(sumAll([4, 1]), 10)
		self.assertEqual(sumAll([5, 10]), 45)
		self.assertEqual(sumAll([10, 5]), 45)

if __name__ == '__main__':
	unittest.main()

# TESTING
# sumAll([1, 4]) should return a number.
# sumAll([1, 4]) should return 10.
# sumAll([4, 1]) should return 10.
# sumAll([5, 10]) should return 45.
# sumAll([10, 5]) should return 45.