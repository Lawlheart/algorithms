import unittest

# SEARCH AND REPLACE
# Perform a search and replace on the sentence using the arguments provided and return the new sentence.
# First argument is the sentence to perform the search and replace on.
# Second argument is the word that you will be replacing (before).
# Third argument is what you will be replacing the second argument with (after).
# NOTE: Preserve the case of the original word when you are replacing it. For example if you mean to replace the word "Book" with the word "dog", it should be replaced as "Dog"

def replace(string, before, after):
	pass

class replaceTest(unittest.TestCase):
	def test(self):
		self.assertEqual(type(replace("Let us go to the store", "store", "mall")), str)
		self.assertEqual(replace("Let us go to the store", "store", "mall"), "Let us go to the mall")
		self.assertEqual(replace("He is Sleeping on the couch", "Sleeping", "sitting"), "He is Sitting on the couch")
		self.assertEqual(replace("This has a spellngi error", "spellngi", "spelling"), "This has a spelling error")
		self.assertEqual(replace("His name is Tom", "Tom", "john"), "His name is John")
		self.assertEqual(replace("Let us get back to more Coding", "Coding", "bonfires"), "Let us get back to more Bonfires")

if __name__ == '__main__':
	unittest.main()



# TESTING
# replace("Let us go to the store", "store", "mall") should return "Let us go to the mall".
# replace("He is Sleeping on the couch", "Sleeping", "sitting") should return "He is Sitting on the couch".
# replace("This has a spellngi error", "spellngi", "spelling") should return "This has a spelling error".
# replace("His name is Tom", "Tom", "john") should return "His name is John".
# replace("Let us get back to more Coding", "Coding", "bonfires") should return "Let us get back to more Bonfires".
