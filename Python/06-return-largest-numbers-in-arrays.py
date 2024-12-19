import unittest

# RETURN LARGEST NUMBERS IN ARRAYS
# Return an array consisting of the largest number from each provided sub-array. For simplicity, the provided array will contain exactly 4 sub-arrays.

def getLargest(nums):
	return sorted(nums, key=lambda x: x)[-1]

def largestOfFour(lis):
	return [getLargest(chunk) for chunk in lis]


class largestOfFourTest(unittest.TestCase):
	def test(self):
		self.assertEqual(type(getLargest([4, 5, 1, 3])), int)
		self.assertEqual(getLargest([4, 5, 1, 3]), 5)
		self.assertEqual(type(largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]])), list)
		self.assertEqual(largestOfFour([[13, 27, 18, 26], [4, 5, 1, 3], [32, 35, 37, 39], [1000, 1001, 857, 1]]), [27,5,39,1001])
		self.assertEqual(largestOfFour([[4, 9, 1, 3], [13, 35, 18, 26], [32, 35, 97, 39], [1000000, 1001, 857, 1]]), [9, 35, 97, 1000000])

if __name__ == '__main__':
	unittest.main()

# TESTING
# largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]) should return an array.
# largestOfFour([[13, 27, 18, 26], [4, 5, 1, 3], [32, 35, 37, 39], [1000, 1001, 857, 1]]) should return [27,5,39,1001].
# largestOfFour([[4, 9, 1, 3], [13, 35, 18, 26], [32, 35, 97, 39], [1000000, 1001, 857, 1]]) should return [9, 35, 97, 1000000].