import unittest

# SORTED UNION
# Write a function that takes two or more arrays and returns a new array of unique values in the order of the original provided arrays.
# In other words, all values present from all arrays should be included in their original order, but with no duplicates in the final array.
# The unique numbers should be sorted by their original order, but the final array should not be sorted in numerical order.

def unite(lis1, lis2, lis3):
	pass

class uniteTest(unittest.TestCase):
	def test(self):
		self.assertEqual(type(unite([1, 3, 2], [5, 2, 1, 4], [2, 1])), list)
		self.assertEqual(unite([1, 3, 2], [5, 2, 1, 4], [2, 1]), [1, 3, 2, 5, 4])
		self.assertEqual(unite([1, 3, 2], [1, [5]], [2, [4]]), [1, 3, 2, [5], [4]])
		self.assertEqual(unite([1, 2, 3], [5, 2, 1]), [1, 2, 3, 5])
		self.assertEqual(unite([1, 2, 3], [5, 2, 1, 4], [2, 1], [6, 7, 8]), [1, 2, 3, 5, 4, 6, 7, 8])

if __name__ == '__main__':
	unittest.main()

# TESTING
# unite([1, 3, 2], [5, 2, 1, 4], [2, 1]) should return [1, 3, 2, 5, 4].
# unite([1, 3, 2], [1, [5]], [2, [4]]) should return [1, 3, 2, [5], [4]].
# unite([1, 2, 3], [5, 2, 1]) should return [1, 2, 3, 5].
# unite([1, 2, 3], [5, 2, 1, 4], [2, 1], [6, 7, 8]) should return [1, 2, 3, 5, 4, 6, 7, 8].