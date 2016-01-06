import unittest

# LONGEST WORD IN A STRING
# Return the length of the longest word in the provided sentence.
# Your response should be a number.

def longestWord(string):
	sol = 0
	for letter in string.split():
		if len(letter) > sol:
			sol = len(letter)
	return sol

longestWord("The quick brown fox jumped over the lazy dog")


class longestWordTest(unittest.TestCase):
	def test(self):
		self.assertEqual(type(longestWord("The quick brown fox jumped over the lazy dog")), int)
		self.assertEqual(longestWord("The quick brown fox jumped over the lazy dog"), 6)
		self.assertEqual(longestWord("May the force be with you"), 5)
		self.assertEqual(longestWord("Google do a barrel roll"), 6)
		self.assertEqual(longestWord("What is the average airspeed velocity of an unladen swallow"), 8)
		self.assertEqual(longestWord("What if we try a super-long word such as otorhinolaryngology"), 19)

if __name__ == "__main__":
	unittest.main()

# TESTING
# longestWord("The quick brown fox jumped over the lazy dog") should return a number.
# longestWord("The quick brown fox jumped over the lazy dog") should return 6.
# longestWord("May the force be with you") should return 5.
# longestWord("Google do a barrel roll") should return 6.
# longestWord("What is the average airspeed velocity of an unladen swallow") should return 8.
# longestWord("What if we try a super-long word such as otorhinolaryngology") should return 19.