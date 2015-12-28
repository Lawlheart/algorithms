import unittest

# WHERE DO I BELONG
# Return the lowest index at which a value (second argument) should be inserted into an list (first argument) once it has been sorted.
# For example, where([1,2,3,4], 1.5) should return 1 because it is greater than 1 (index 0), but less than 2 (index 1).
# Likewise, where([20,3,5], 19) should return 2 because once the list has been sorted it will look like [3,5,20] and 19 is less than 20 (index 2) and greater than 5 (index 1).

def where(lis, num):
	return num

class whereTest(unittest.TestCase):
	def test(self):
		self.assertEqual(type(where([10, 20, 30, 40, 50], 35)), int)
		self.assertEqual(where([10, 20, 30, 40, 50], 35), 3)
		self.assertEqual(where([10, 20, 30, 40, 50], 30), 2)
		self.assertEqual(where([40, 60], 50), 1)
		self.assertEqual(where([3, 10, 5], 3), 0)
		self.assertEqual(where([5, 3, 20, 3], 5), 2)
		self.assertEqual(where([2, 20, 10], 19), 2)
		self.assertEqual(where([2, 5, 10], 15), 3)


if __name__ == '__main__':
	unittest.main()

# TESTING
# where([10, 20, 30, 40, 50], 35) should return 3.
# where([10, 20, 30, 40, 50], 30) should return 2.
# where([40, 60], 50) should return 1.
# where([3, 10, 5], 3) should return 0.
# where([5, 3, 20, 3], 5) should return 2.
# where([2, 20, 10], 19) should return 2.
# where([2, 5, 10], 15) should return 3.