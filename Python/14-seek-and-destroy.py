import unittest

# SEEK AND DESTROY
# You will be provided with an initial list (the first argument in the destroyer function), followed by one or more arguments. Remove all elements from the initial list that are of the same value as these arguments.

def destroyer(lis, tar1, tar2):
	pass

class destroyerTest(unittest.TestCase):
	def test(self):
		self.assertEqual(type(destroyer([1, 2, 3, 1, 2, 3], 2, 3)), list)
		self.assertEqual(destroyer([1, 2, 3, 1, 2, 3], 2, 3), [1, 1])
		self.assertEqual(destroyer([1, 2, 3, 5, 1, 2, 3], 2, 3), [1, 5, 1])
		self.assertEqual(destroyer([3, 5, 1, 2, 2], 2, 3, 5), [1])
		self.assertEqual(destroyer([2, 3, 2, 3], 2, 3), [])
		self.assertEqual(destroyer(["tree", "hamburger", 53], "tree", 53), ["hamburger"])

if __name__ == '__main__':
	unittest.main()

# TESTING
# destroyer([1, 2, 3, 1, 2, 3], 2, 3) should return [1, 1].
# destroyer([1, 2, 3, 5, 1, 2, 3], 2, 3) should return [1, 5, 1].
# destroyer([3, 5, 1, 2, 2], 2, 3, 5) should return [1].
# destroyer([2, 3, 2, 3], 2, 3) should return [].
# destroyer(["tree", "hamburger", 53], "tree", 53) should return ["hamburger"].