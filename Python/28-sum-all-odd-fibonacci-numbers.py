import unittest

# SUM ALL ODD FIBONACCI NUMBERS
# Return the sum of all odd Fibonacci numbers up to and including the passed number if it is a Fibonacci number.
# The first few numbers of the Fibonacci sequence are 1, 1, 2, 3, 5 and 8, and each subsequent number is the sum of the previous two numbers.
# As an example, passing 4 to the function will return 5 because all the odd Fibonacci numbers under 4 are 1, 1, and 3.

def sumFibs(num):
	return num

class sumFibsTest(unittest.TestCase):
	def test(self):
		self.assertEqual(type(sumFibs(4)), int)
		self.assertEqual(sumFibs(1000), 1785)
		self.assertEqual(sumFibs(4000000), 4613732)
		self.assertEqual(sumFibs(4), 5)
		self.assertEqual(sumFibs(75024), 60696)
		self.assertEqual(sumFibs(75025), 135721)

if __name__ == '__main__':
	unittest.main()

# TESTING
# sumFibs(1) should return a number.
# sumFibs(1000) should return 1785.
# sumFibs(4000000) should return 4613732.
# sumFibs(4) should return 5.
# sumFibs(75024) should return 60696.
# sumFibs(75025) should return 135721.