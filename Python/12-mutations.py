import unittest

# MUTATIONS
# Return true if the string in the first element of the array contains all of the letters of the string in the second element of the array.
# For example, ["hello", "Hello"], should return true because all of the letters in the second string are present in the first, ignoring case.
# The arguments ["hello", "hey"] should return false because the string "hello" does not contain a "y".
# Lastly, ["Alien", "line"], should return true because all of the letters in "line" are present in "Alien".

def mutation(lis):
	pass

class mutationTest(unittest.TestCase):
	def test(self):
		self.assertEqual(type(mutation(["hello", "hey"])), bool)
		self.assertFalse(mutation(["hello", "hey"]))
		self.assertTrue(mutation(["hello", "Hello"]))
		self.assertTrue(mutation(["zyxwvutsrqponmlkjihgfedcba", "qrstu"]))
		self.assertTrue(mutation(["Mary", "Army"]))
		self.assertTrue(mutation(["Mary", "Aarmy"]))
		self.assertTrue(mutation(["Alien", "line"]))
		self.assertTrue(mutation(["floor", "for"]))
		self.assertFalse(mutation(["hello", "neo"]))

if __name__ == '__main__':
	unittest.main()

# TESTING
# mutation(["hello", "hey"]) should return false.
# mutation(["hello", "Hello"]) should return true.
# mutation(["zyxwvutsrqponmlkjihgfedcba", "qrstu"]) should return true.
# mutation(["Mary", "Army"]) should return true.
# mutation(["Mary", "Aarmy"]) should return true.
# mutation(["Alien", "line"]) should return true.
# mutation(["floor", "for"]) should return true.
# mutation(["hello", "neo"]) should return false.