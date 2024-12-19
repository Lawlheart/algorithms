import unittest

# ROMAN NUMERAL CONVERTER
# Convert the given number into a roman numeral.
# All roman numerals answers should be provided in upper-case.

def convert(num):
	pass


class convertTest(unittest.TestCase):
	def test(self):
		self.assertEqual(type(convert(36)), str)
		self.assertEqual(convert(5), "V")
		self.assertEqual(convert(9), "IX")
		self.assertEqual(convert(12), "XII")
		self.assertEqual(convert(16), "XVI")
		self.assertEqual(convert(29), "XXIX")
		self.assertEqual(convert(44), "XLIV")
		self.assertEqual(convert(45), "XLV")
		self.assertEqual(convert(68), "LXVIII")
		self.assertEqual(convert(83), "LXXXIII")
		self.assertEqual(convert(97), "XCVII")
		self.assertEqual(convert(99), "XCIX")
		self.assertEqual(convert(500), "D")
		self.assertEqual(convert(501), "DI")
		self.assertEqual(convert(649), "DCXLIX")
		self.assertEqual(convert(798), "DCCXCVIII")
		self.assertEqual(convert(891), "DCCCXCI")
		self.assertEqual(convert(1000), "M")
		self.assertEqual(convert(1004), "MIV")
		self.assertEqual(convert(1006), "MVI")
		self.assertEqual(convert(1023), "MXXIII")
		self.assertEqual(convert(2014), "MMXIV")
		self.assertEqual(convert(3999), "MMMCMXCIX")

if __name__ == '__main__':
	unittest.main()

# TESTING
# convert(5) should return "V".
# convert(9) should return "IX".
# convert(12) should return "XII".
# convert(16) should return "XVI".
# convert(29) should return "XXIX".
# convert(44) should return "XLIV".
# convert(45) should return "XLV"
# convert(68) should return "LXVIII"
# convert(83) should return "LXXXIII"
# convert(97) should return "XCVII"
# convert(99) should return "XCIX"
# convert(500) should return "D"
# convert(501) should return "DI"
# convert(649) should return "DCXLIX"
# convert(798) should return "DCCXCVIII"
# convert(891) should return "DCCCXCI"
# convert(1000) should return "M"
# convert(1004) should return "MIV"
# convert(1006) should return "MVI"
# convert(1023) should return "MXXIII"
# convert(2014) should return "MMXIV"
# convert(3999) should return "MMMCMXCIX"