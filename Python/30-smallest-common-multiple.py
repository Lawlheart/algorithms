import unittest

# SMALLEST COMMON MULTIPLE
# Find the smallest common multiple of the provided parameters that can be evenly divided by both, as well as by all sequential numbers in the range between these parameters.
# The range will be an array of two numbers that will not necessarily be in numerical order.

def smallestCommons(lis):
	return lis[0]

class smallestCommonsTest(unittest.TestCase):
	def test(self):
		self.assertEqual(type(smallestCommons([1, 5])), int)
		self.assertEqual(smallestCommons([1, 5]), 60)
		self.assertEqual(smallestCommons([5, 1]), 60)
		self.assertEqual(smallestCommons([1, 13]), 360360)

if __name__ == '__main__':
	unittest.main()

# TESTING
# smallestCommons([1, 5]) should return a number.
# smallestCommons([1, 5]) should return 60.
# smallestCommons([5, 1]) should return 60.
# smallestCommons([1, 13]) should return 360360.
