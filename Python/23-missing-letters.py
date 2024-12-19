import unittest

# MISSING LETTERS
# Find the missing letter in the passed letter range and return it.
# If all letters are present in the range, return undefined.

def fearNotLetter(string):
	pass

class fearNotLetterTest(unittest.TestCase):
	def test(self):
		self.assertEqual(type(fearNotLetter("abce")), str)
		self.assertEqual(fearNotLetter("abce"), "d")
		self.assertEqual(fearNotLetter("abcdefghjklmno"), "i")
		self.assertEqual(fearNotLetter("bcd"), None)
		self.assertEqual(fearNotLetter("yz"), None)


if __name__ == '__main__':
	unittest.main()

# TESTING
# fearNotLetter("abce") should return "d".
# fearNotLetter("abcdefghjklmno") should return "i".
# fearNotLetter("bcd") should return None.
# fearNotLetter("yz") should return None.
