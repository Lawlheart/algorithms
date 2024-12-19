import unittest

# VALIDATE US TELEPHONE NUMBERS
# Return true if the passed string is a valid US phone number
# The user may fill out the form field any way they choose as long as it is a valid US number. The following are all valid formats for US numbers:
# 555-555-5555
# (555)555-5555
# (555) 555-5555
# 555 555 5555
# 5555555555
# 1 555 555 5555
# For this challenge you will be presented with a string such as 800-692-7753 or 8oo-six427676;laskdjf. Your job is to validate or reject the US phone number based on any combination of the formats provided above. The area code is required. If the country code is provided, you must confirm that the country code is 1. Return true if the string is a valid US phone number; otherwise false.

def telephoneCheck(string):
  pass

class telephoneCheckTest(unittest.TestCase):
	def test(self):
		self.assertEqual(type(telephoneCheck("555-555-5555")), bool)
		self.assertTrue(telephoneCheck("1 555-555-5555"))
		self.assertTrue(telephoneCheck("1 (555) 555-5555"))
		self.assertTrue(telephoneCheck("5555555555"))
		self.assertTrue(telephoneCheck("555-555-5555"))
		self.assertTrue(telephoneCheck("(555)555-5555"))
		self.assertTrue(telephoneCheck("1(555)555-5555"))
		self.assertTrue(telephoneCheck("1 555 555 5555"))
		self.assertTrue(telephoneCheck("1 456 789 4444"))
		self.assertFalse(telephoneCheck("123**&!!asdf#"))
		self.assertFalse(telephoneCheck("55555555"))
		self.assertFalse(telephoneCheck("(6505552368)"))
		self.assertFalse(telephoneCheck("2 (757) 622-7382"))
		self.assertFalse(telephoneCheck("0 (757) 622-7382"))
		self.assertFalse(telephoneCheck("-1 (757) 622-7382"))
		self.assertFalse(telephoneCheck("2 757 622-7382"))
		self.assertFalse(telephoneCheck("10 (757) 622-7382"))
		self.assertFalse(telephoneCheck("27576227382"))
		self.assertFalse(telephoneCheck("(275)76227382"))
		self.assertFalse(telephoneCheck("2(757)6227382"))
		self.assertFalse(telephoneCheck("2(757)622-7382"))
		self.assertFalse(telephoneCheck("555)-555-5555"))
		self.assertFalse(telephoneCheck("(555-555-5555"))


if __name__ == '__main__':
	unittest.main()


# TESTING
# telephoneCheck("555-555-5555") should return a boolean.
# telephoneCheck("1 555-555-5555") should return true.
# telephoneCheck("1 (555) 555-5555") should return true.
# telephoneCheck("5555555555") should return true.
# telephoneCheck("555-555-5555") should return true.
# telephoneCheck("(555)555-5555") should return true.
# telephoneCheck("1(555)555-5555") should return true.
# telephoneCheck("1 555 555 5555") should return true.
# telephoneCheck("1 456 789 4444") should return true.
# telephoneCheck("123**&!!asdf#") should return false.
# telephoneCheck("55555555") should return false.
# telephoneCheck("(6505552368)") should return false
# telephoneCheck("2 (757) 622-7382") should return false.
# telephoneCheck("0 (757) 622-7382") should return false.
# telephoneCheck("-1 (757) 622-7382") should return false
# telephoneCheck("2 757 622-7382") should return false.
# telephoneCheck("10 (757) 622-7382") should return false.
# telephoneCheck("27576227382") should return false.
# telephoneCheck("(275)76227382") should return false.
# telephoneCheck("2(757)6227382") should return false.
# telephoneCheck("2(757)622-7382") should return false.
# telephoneCheck("555)-555-5555") should return false.
# telephoneCheck("(555-555-5555") should return false.
