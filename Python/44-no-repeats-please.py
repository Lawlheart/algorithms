import unittest

# NO REPEATS PLEASE
# Return the number of total permutations of the provided string that don't have repeated consecutive letters.
# For example, 'aab' should return 2 because it has 6 total permutations, but only 2 of them don't have the same letter (in this case 'a') repeating.

def permAlone(string):
	pass

class permAloneTest(unittest.TestCase):
	def test(self):
		self.assertEqual(type(permAlone("aab")), int)
		self.assertEqual(permAlone("aab"), 2)
		self.assertEqual(permAlone("aaa"), 0)
		self.assertEqual(permAlone("aabb"), 8)
		self.assertEqual(permAlone("abcdefa"), 3600)
		self.assertEqual(permAlone("abfdefa"), 2640)
		self.assertEqual(permAlone("zzzzzzzz"), 0)

if __name__ == '__main__':
	unittest.main()



# TESTING
# permAlone("aab") should return a number.
# permAlone("aab") should return 2.
# permAlone("aaa") should return 0.
# permAlone("aabb") should return 8.
# permAlone("abcdefa") should return 3600.
# permAlone("abfdefa") should return 2640.
# permAlone("zzzzzzzz") should return 0.