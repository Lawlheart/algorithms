import unittest

# STEAMROLLER
# Flatten a nested list. You must account for varying levels of nesting.

def steamroller(lis):
	return lis

class steamrollerTest(unittest.TestCase):
	def test(self):
		self.assertEqual(type(steamroller([1, [2], [3, [[4]]]])), list)
		self.assertEqual(steamroller([[["a"]], [["b"]]]), ["a", "b"])
		self.assertEqual(steamroller([1, [2], [3, [[4]]]]), [1, 2, 3, 4])
		self.assertEqual(steamroller([1, [], [3, [[4]]]]), [1, 3, 4])
		self.assertEqual(steamroller([1, {}, [3, [[4]]]]), [1, {}, 3, 4])

if __name__ == '__main__':
	unittest.main()

# TESTING
# steamroller([[["a"]], [["b"]]]) should return ["a", "b"].
# steamroller([1, [2], [3, [[4]]]]) should return [1, 2, 3, 4].
# steamroller([1, [], [3, [[4]]]]) should return [1, 3, 4].
# steamroller([1, {}, [3, [[4]]]]) should return [1, {}, 3, 4].
