import unittest

# TRUNCATE A STRING
# Truncate a string (first argument) if it is longer than the given maximum string length (second argument). Return the truncated string with a "..." ending.
# Note that the three dots at the end add to the string length.
# If the num is less than or equal to 3, then the length of the three dots is not added to the string length.

def truncate(string, num):
	if len(string) <= num:
		return string
	elif num > 3:
		return "{}...".format(string[:num - 3])
	else:
		return "{}...".format(string[:num])

class truncateTest(unittest.TestCase):
	def test(self):
		self.assertEqual(type(truncate("A-tisket a-tasket A green and yellow basket", 11)), str)
		self.assertEqual(truncate("A-tisket a-tasket A green and yellow basket", 11), "A-tisket...")
		self.assertEqual(truncate("Peter Piper picked a peck of pickled peppers", 14), "Peter Piper...")
		self.assertEqual(truncate("A-tisket a-tasket A green and yellow basket", len("A-tisket a-tasket A green and yellow basket")), "A-tisket a-tasket A green and yellow basket")
		self.assertEqual(truncate("A-tisket a-tasket A green and yellow basket", len("A-tisket a-tasket A green and yellow basket") + 2), "A-tisket a-tasket A green and yellow basket")
		self.assertEqual(truncate("A-", 1), "A...")
		self.assertEqual(truncate("Absolutely Longer", 2), "Ab...")

if __name__ == '__main__':
	unittest.main()

# TESTING
# truncate("A-tisket a-tasket A green and yellow basket", 11) should return "A-tisket...".
# truncate("Peter Piper picked a peck of pickled peppers", 14) should return "Peter Piper...".
# truncate("A-tisket a-tasket A green and yellow basket", "A-tisket a-tasket A green and yellow basket".length) should return "A-tisket a-tasket A green and yellow basket".
# truncate("A-tisket a-tasket A green and yellow basket", "A-tisket a-tasket A green and yellow basket".length + 2) should return "A-tisket a-tasket A green and yellow basket".
# truncate("A-", 1) should return "A...".
# truncate("Absolutely Longer", 2) should return "Ab...".