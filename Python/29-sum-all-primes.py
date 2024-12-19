import unittest

# SUM ALL PRIMES
# Sum all the prime numbers up to and including the provided number.
# A prime number is defined as having only two divisors, 1 and itself. For example, 2 is a prime number because it's only divisible by 1 and 2. 1 isn't a prime number, because it's only divisible by itself.
# The provided number may not be a prime.

def sumPrimes(num):
	pass

class sumPrimesTest(unittest.TestCase):
	def test(self):
		self.assertEqual(type(sumPrimes(10)), int)
		self.assertEqual(sumPrimes(10), 17)
		self.assertEqual(sumPrimes(977), 73156)

if __name__ == '__main__':
	unittest.main()

# TESTING
# sumPrimes(10) should return a number.
# sumPrimes(10) should return 17.
# sumPrimes(977) should return 73156.
