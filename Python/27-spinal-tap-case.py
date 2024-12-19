import unittest

# SPINAL TAP CASE
# Convert a string to spinal case. Spinal case is all-lowercase-words-joined-by-dashes.

def spinalCase(string):
	pass

class spinalCaseTest(unittest.TestCase):
	def test(self):
		self.assertEqual(type(spinalCase('This Is Spinal Tap')), str)
		self.assertEqual(spinalCase("This Is Spinal Tap"), "this-is-spinal-tap")
		self.assertEqual(spinalCase("thisIsSpinalTap"), "this-is-spinal-tap")
		self.assertEqual(spinalCase("The_Andy_Griffith_Show"), "the-andy-griffith-show")
		self.assertEqual(spinalCase("Teletubbies say Eh-oh"), "teletubbies-say-eh-oh")


if __name__ == '__main__':
	unittest.main()

# TESTING
# spinalCase("This Is Spinal Tap") should return "this-is-spinal-tap".
# spinalCase("thisIsSpinalTap") should return "this-is-spinal-tap".
# spinalCase("The_Andy_Griffith_Show") should return "the-andy-griffith-show".
# spinalCase("Teletubbies say Eh-oh") should return "teletubbies-say-eh-oh".
