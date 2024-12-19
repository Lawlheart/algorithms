import unittest

# FINDERS KEEPERS
# Create a function that looks through an array (first argument) and returns the first element in the array that passes a truth test (second argument).
# if no elements pass, return None

def find(lis, filt):
	pass


class findTest(unittest.TestCase):
	def test(self):
		self.assertEqual(type(find([1, 2, 3, 4], filt = lambda num: num % 2 == 0)), int)
		self.assertEqual(find([1, 3, 5, 8, 9, 10], filt = lambda num: num % 2 == 0), 8)
		self.assertEqual(find([1, 3, 5, 9], filt = lambda num: num % 2 == 0), None)

if __name__ == '__main__':
	unittest.main()

# TESTING
# find([1, 3, 5, 8, 9, 10], function(num) { return num % 2 === 0; }) should return 8.
# find([1, 3, 5, 9], function(num) { return num % 2 === 0; }) should return undefined.
