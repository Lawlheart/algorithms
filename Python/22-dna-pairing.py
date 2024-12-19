import unittest

# DNA PAIRING
# The DNA strand is missing the pairing element. Take each character, get its pair, and return the results as a 2d array.
# Base pairs are a pair of AT and CG. Match the missing element to the provided character.
# Return the provided character as the first element in each array.
# For example, for the input GCG, return [["G", "C"], ["C","G"],["G", "C"]]
# The character and its pair are paired up in an array, and all the arrays are grouped into one encapsulating array.

def pair(string):
	pass

class pairTest(unittest.TestCase):
	def test(self):
		self.assertEqual(type(pair("GCG")), str)
		self.assertEqual(pair("ATCGA"), [["A","T"],["T","A"],["C","G"],["G","C"],["A","T"]])
		self.assertEqual(pair("TTGAG"), [["T","A"],["T","A"],["G","C"],["A","T"],["G","C"]])
		self.assertEqual(pair("CTCTA"), [["C","G"],["T","A"],["C","G"],["T","A"],["A","T"]])

if __name__ == '__main__':
	unittest.main()

# TESTING
# pair("ATCGA") should return [["A","T"],["T","A"],["C","G"],["G","C"],["A","T"]].
# pair("TTGAG") should return [["T","A"],["T","A"],["G","C"],["A","T"],["G","C"]].
# pair("CTCTA") should return [["C","G"],["T","A"],["C","G"],["T","A"],["A","T"]].