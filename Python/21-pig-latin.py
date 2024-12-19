import unittest

# PIG LATIN
# Translate the provided string to pig latin.
# Pig Latin takes the first consonant (or consonant cluster) of an English word, moves it to the end of the word and suffixes an "ay".
# If a word begins with a vowel you just add "way" to the end.

def translate(string):
	pass

class translateTest(unittest.TestCase):
	def test(self):
		self.assertEqual(type(translate("california")), str)
		self.assertEqual(translate("california"), "aliforniacay")
		self.assertEqual(translate("paragraphs"), "aragraphspay")
		self.assertEqual(translate("glove"), "oveglay")
		self.assertEqual(translate("algorithm"), "algorithmway")
		self.assertEqual(translate("eight"), "eightway")

if __name__ == '__main__':
	unittest.main()

# TESTING
# translate("california") should return "aliforniacay".
# translate("paragraphs") should return "aragraphspay".
# translate("glove") should return "oveglay".
# translate("algorithm") should return "algorithmway".
# translate("eight") should return "eightway".
