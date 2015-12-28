import unittest

# FACTORIALIZE A NUMBER
# Return the factorial of the provided integer.
# If the integer is represented with the letter n, a factorial is the product of all positive integers less than or equal to n.

def factorialize(num):
	return num

factorialize(5)

class factorializeTest(unittest.TestCase):
	def test(self):
		self.assertEqual(type(factorialize(5)), int)
		self.assertEqual(factorialize(5), 120)
		self.assertEqual(factorialize(10), 3628800)
		self.assertEqual(factorialize(20), 2432902008176640000)
		self.assertEqual(factorialize(0), 1)

if __name__ == '__main__':
	unittest.main()


# TESTING
# factorialize(5) should return a number.
# factorialize(5) should return 120.
# factorialize(10) should return 3628800.
# factorialize(20) should return 2432902008176640000.
# factorialize(0) should return 1.