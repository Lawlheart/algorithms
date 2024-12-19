import unittest

# BOO WHO
# Check if a value is classified as a boolean primitive. Return true or false.
# Boolean primitives are true and false.

def boo(boolean):
	return True

class booTest(unittest.TestCase):
	def test(self):
		self.assertEqual(type(boo(None)), bool)
		self.assertTrue(boo(True))
		self.assertTrue(boo(False))
		self.assertFalse(boo([1, 2, 3]))
		self.assertFalse(boo([].slice))
		self.assertFalse(boo({ "a": 1 }))
		self.assertFalse(boo(1))
		self.assertFalse(boo(NaN))
		self.assertFalse(boo("a"))
		self.assertFalse(boo("True"))
		self.assertFalse(boo("False"))

if __name__ == '__main__':
	unittest.main()

# TESTING
# boo(True) should return True.
# boo(False) should return True.
# boo([1, 2, 3]) should return False.
# boo([].slice) should return False.
# boo({ "a": 1 }) should return False.
# boo(1) should return False.
# boo(NaN) should return False.
# boo("a") should return False.
# boo("True") should return False.
# boo("False") should return False.