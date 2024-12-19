import unittest

# SLASHER FLICK
# Return the remaining elements of an array after chopping off n elements from the head.
# The head meaning the beginning of the array, or the zeroth index

def slasher(lis, num):
	pass

class slasherTest(unittest.TestCase):
	def test(self):
		self.assertEqual(type(slasher([1, 2, 3], 2)), list)
		self.assertEqual(slasher([1, 2, 3], 2), [3])
		self.assertEqual(slasher([1, 2, 3], 0), [1, 2, 3])
		self.assertEqual(slasher([1, 2, 3], 9), [])
		self.assertEqual(slasher([1, 2, 3], 4), [])

if __name__ == '__main__':
	unittest.main()

# TESTING
# slasher([1, 2, 3], 2) should return [3].
# slasher([1, 2, 3], 0) should return [1, 2, 3].
# slasher([1, 2, 3], 9) should return [].
# slasher([1, 2, 3], 4) should return [].