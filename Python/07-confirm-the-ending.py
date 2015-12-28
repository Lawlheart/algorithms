import unittest

# CONFIRM THE ENDING
# Check if a string (first argument) ends with the given target string (second argument).

def end(string, target):
	return string

class endTest(unittest.TestCase):
	def test(self):
		self.assertEqual(type(end("Bastian", "n")), bool)
		self.assertTrue(end("Bastian", "n"))
		self.assertFalse(end("Connor", "n"))
		self.assertFalse(end("Walking on water and developing software from a specification are easy if both are frozen", "specification"))
		self.assertTrue(end("He has to give me a new name", "name"))
		self.assertTrue(end("He has to give me a new name", "me"))
		self.assertFalse(end("He has to give me a new name", "na"))
		self.assertFalse(end("If you want to save our world, you must hurry. We dont know how much longer we can withstand the nothing", "mountain"))

if __name__ == '__main__':
	unittest.main()

#TESTING
# end("Bastian", "n") should return a string.
# end("Bastian", "n") should return true.
# end("Connor", "n") should return false.
# end("Walking on water and developing software from a specification are easy if both are frozen", "specification") should return false.
# end("He has to give me a new name", "name") should return true.
# end("He has to give me a new name", "me") should return true.
# end("He has to give me a new name", "na") should return false.
# end("If you want to save our world, you must hurry. We dont know how much longer we can withstand the nothing", "mountain") should return false.