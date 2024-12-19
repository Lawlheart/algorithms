import unittest

# FALSY BOUNCER
# Remove all falsy values from an array.

def bouncer(lis):
	pass

class bouncerTest(unittest.TestCase):
	def test(self):
		self.assertEqual(type(bouncer([7, "ate", "", False, 9])), list)
		self.assertEqual(bouncer([7, "ate", "", False, 9]), [7, "ate", 9])
		self.assertEqual(bouncer(["a", "b", "c"]), ["a", "b", "c"])
		self.assertEqual(bouncer([{}, [], [1], None]), [[1]])

if __name__ == '__main__':
	unittest.main()

# TESTING
# TO BE WRITTEN - BELOW ARE FOR JS
# bouncer([7, "ate", "", False, 9]) should return [7, "ate", 9].
# bouncer(["a", "b", "c"]) should return ["a", "b", "c"].
# bouncer([False, null, 0, NaN, undefined, ""]) should return [].