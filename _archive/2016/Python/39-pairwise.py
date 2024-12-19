import unittest

# PAIRWISE
# Return the sum of all indices of elements of 'arr' that can be paired with one other element to form a sum that equals the value in the second argument 'arg'. If multiple sums are possible, return the smallest sum. Once an element has been used, it cannot be reused to pair with another.
# For example, pairwise([1, 4, 2, 3, 0, 5], 7) should return 11 because 4, 2, 3 and 5 can be paired with each other to equal 7.
# pairwise([1, 3, 2, 4], 4) would only equal 1, because only the first two elements can be paired to equal 4, and the first element has an index of 0!

def pairwise(lis, num):
	return num

class pairwiseTest(unittest.TestCase):
	def test(self):
		self.assertEqual(type(pairwise([1,4,2,3,0,5], 7)), int)
		self.assertEqual(pairwise([1, 4, 2, 3, 0, 5], 7), 11)
		self.assertEqual(pairwise([1, 3, 2, 4], 4), 1)
		self.assertEqual(pairwise([1, 1, 1], 2), 1)
		self.assertEqual(pairwise([0, 0, 0, 0, 1, 1], 1), 10)
		self.assertEqual(pairwise([], 100), 0)

if __name__ == '__main__':
	unittest.main()


# TESTING
# pairwise([1, 4, 2, 3, 0, 5], 7) should return 11.
# pairwise([1, 3, 2, 4], 4) should return 1.
# pairwise([1, 1, 1], 2) should return 1.
# pairwise([0, 0, 0, 0, 1, 1], 1) should return 10.
# pairwise([], 100) should return 0.