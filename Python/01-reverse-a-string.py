import unittest

# REVERSE A STRING
# Reverse the provided string.
# You may need to turn the string into an array before you can reverse it.
# Your result must be a string.

def reverseString(string):
	return string[::-1]

reverseString("Hello")


class reverseStringTest(unittest.TestCase):
	def test(self):
		self.assertEqual(type(reverseString("hello")), str)
		self.assertEqual(reverseString("hello"), "olleh")
		self.assertEqual(reverseString("Howdy"), "ydwoH")
		self.assertEqual(reverseString("Greetings from Earth"), "htraE morf sgniteerG")


if __name__ == '__main__':
    unittest.main()

# TESTING
# reverseString("hello") should return a string.
# reverseString("hello") should become "olleh".
# reverseString("Howdy") should become "ydwoH".
# reverseString("Greetings from Earth") should return "htraE morf sgniteerG".