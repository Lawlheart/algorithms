import unittest

# CHUNKY MONKEY
# Write a function that splits an array (first argument) into groups the length of size (second argument) and returns them as a multidimensional array.

def chunk(lis, size):
	pass

class chunkTest(unittest.TestCase):
	def test(self):
		self.assertEqual(type(chunk(["a", "b", "c", "d"], 2)), list)
		self.assertEqual(chunk(["a", "b", "c", "d"], 2), [["a", "b"], ["c", "d"]])
		self.assertEqual(chunk([0, 1, 2, 3, 4, 5], 3), [[0, 1, 2], [3, 4, 5]])
		self.assertEqual(chunk([0, 1, 2, 3, 4, 5], 2), [[0, 1], [2, 3], [4, 5]])
		self.assertEqual(chunk([0, 1, 2, 3, 4, 5], 4), [[0, 1, 2, 3], [4, 5]])


if __name__ == '__main__':
	unittest.main()

# TESTING
# chunk(["a", "b", "c", "d"], 2) should return [["a", "b"], ["c", "d"]].
# chunk([0, 1, 2, 3, 4, 5], 3) should return [[0, 1, 2], [3, 4, 5]].
# chunk([0, 1, 2, 3, 4, 5], 2) should return [[0, 1], [2, 3], [4, 5]].
# chunk([0, 1, 2, 3, 4, 5], 4) should return [[0, 1, 2, 3], [4, 5]].