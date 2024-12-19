import unittest

# CONVERT HTML ENTITIES
# Convert the characters "&", "<", ">", '"' (double quote), and "'" (apostrophe), in a string to their corresponding HTML entities.

def convert(string):
	return string

class convertTest(unittest.TestCase):
	def test(self):
		self.assertEqual(type(convert("Dolce & Gabbana")), str)
		self.assertEqual(convert("Dolce & Gabbana"), 'Dolce &​amp; Gabbana')
		self.assertEqual(convert("Hamburgers < Pizza < Tacos"), 'Hamburgers &​lt; Pizza &​lt; Tacos')
		self.assertEqual(convert("Sixty > twelve"), 'Sixty &​gt; twelve')
		self.assertEqual(convert('Stuff in "quotation marks"'), 'Stuff in &​quot;quotation marks&​quot;')
		self.assertEqual(convert("Shindler's List"), 'Shindler&​apos;s List')
		self.assertEqual(convert("<>"), '&​lt;&​gt;')
		self.assertEqual(convert("abc"), 'abc')

if __name__ == '__main__':
	unittest.main()

# TESTING
# convert("Dolce & Gabbana") should return Dolce &​amp; Gabbana.
# convert("Hamburgers < Pizza < Tacos") should return Hamburgers &​lt; Pizza &​lt; Tacos.
# convert("Sixty > twelve") should return Sixty &​gt; twelve.
# convert('Stuff in "quotation marks"') should return Stuff in &​quot;quotation marks&​quot;.
# convert("Shindler's List") should return Shindler&​apos;s List.
# convert("<>") should return &​lt;&​gt;.
# convert("abc") should return abc.
