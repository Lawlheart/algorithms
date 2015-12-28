import unittest

# REPEAT A STRING REPEAT A STRING
# Repeat a given string (first argument) n times (second argument). Return an empty string if n is a negative number.

def repeat(string, num):
	return string

class repeatTest(unittest.TestCase):
	def test(self):
		self.assertEqual(type(repeat("*", 3)), str)
		self.assertEqual(repeat("*", 3), "***")
		self.assertEqual(repeat("abc", 3), "abcabcabc")
		self.assertEqual(repeat("abc", 4), "abcabcabcabc")
		self.assertEqual(repeat("abc", 1), "abc")
		self.assertEqual(repeat("*", 8), "********")
		self.assertEqual(repeat("abc", -2), "")

if __name__ == '__main__':
	unittest.main()

# TESTING
# repeat("*", 3) should return "***".
# repeat("abc", 3) should return "abcabcabc".
# repeat("abc", 4) should return "abcabcabcabc".
# repeat("abc", 1) should return "abc".
# repeat("*", 8) should return "********".
# repeat("abc", -2) should return "".