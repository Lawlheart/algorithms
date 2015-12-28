import unittest

# TITLE CASE A SENTENCE
# Return the provided string with the first letter of each word capitalized. Make sure the rest of the word is in lower case.
# For the purpose of this exercise, you should also capitalize connecting words like "the" and "of".

def titleCase(string):
	return string

class titleCaseTest(unittest.TestCase):
	def test(self):
		self.assertEqual(type(titleCase("I'm a little tea pot")), str)
		self.assertEqual(titleCase("I'm a little tea pot"), "I'm A Little Tea Pot")
		self.assertEqual(titleCase("sHoRt AnD sToUt"), "Short And Stout")
		self.assertEqual(titleCase("HERE IS MY HANDLE HERE IS MY SPOUT"), "Here Is My Handle Here Is My Spout")

if __name__ == '__main__':
	unittest.main()

# TESTING
# titleCase("I'm a little tea pot") should return a string.
# titleCase("I'm a little tea pot") should return "I'm A Little Tea Pot".
# titleCase("sHoRt AnD sToUt") should return "Short And Stout".
# titleCase("HERE IS MY HANDLE HERE IS MY SPOUT") should return "Here Is My Handle Here Is My Spout".
