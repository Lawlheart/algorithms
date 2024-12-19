import unittest

# WHERE ART THOU
# Make a function that looks through an array of objects ('first' argument) and returns an array of all objects that have matching property and value pairs (second argument). Each property and value pair of the source object has to be present in the object from the collection if it is to be included in the returned array.
# For example, if the 'first' argument is [{ 'first': "Romeo", 'last': "Montague" }, { 'first': "Mercutio", 'last': None }, { 'first': "Tybalt", 'last': "Capulet" }], and the second argument is { 'last': "Capulet" }, then you must return the third object from the array (the 'first' argument), because it contains the property and it's value, that was passed on as the second argument.

def where(collection, source):
	pass

class whereTest(unittest.TestCase):
	def test(self):
		self.assertEqual(type(where([{ 'first': "Romeo", 'last': "Montague" }, { 'first': "Mercutio", 'last': None }, { 'first': "Tybalt", 'last': "Capulet" }], { 'last': "Capulet" })), list)
		self.assertEqual(where([{ 'first': "Romeo", 'last': "Montague" }, { 'first': "Mercutio", 'last': None }, { 'first': "Tybalt", 'last': "Capulet" }], { 'last': "Capulet" }), [{ 'first': "Tybalt", 'last': "Capulet" }])
		self.assertEqual(where([{ "a": 1 }, { "a": 1 }, { "a": 1, "b": 2 }], { "a": 1 }), [{ "a": 1 }, { "a": 1 }, { "a": 1, "b": 2 }])
		self.assertEqual(where([{ "a": 1, "b": 2 }, { "a": 1 }, { "a": 1, "b": 2, "c": 2 }], { "a": 1, "b": 2 }), [{ "a": 1, "b": 2 }, { "a": 1, "b": 2, "c": 2 }])
		self.assertEqual(where([{ "a": 1, "b": 2 }, { "a": 1 }, { "a": 1, "b": 2, "c": 2 }], { "a": 1, "c": 2 }), [{ "a": 1, "b": 2, "c": 2 }])

if __name__ == '__main__':
	unittest.main()

# TESTING
# where([{ 'first': "Romeo", 'last': "Montague" }, { 'first': "Mercutio", 'last': None }, { 'first': "Tybalt", 'last': "Capulet" }], { 'last': "Capulet" }) should return [{ 'first': "Tybalt", 'last': "Capulet" }].
# where([{ "a": 1 }, { "a": 1 }, { "a": 1, "b": 2 }], { "a": 1 }) should return [{ "a": 1 }, { "a": 1 }, { "a": 1, "b": 2 }].
# where([{ "a": 1, "b": 2 }, { "a": 1 }, { "a": 1, "b": 2, "c": 2 }], { "a": 1, "b": 2 }) should return [{ "a": 1, "b": 2 }, { "a": 1, "b": 2, "c": 2 }].
# where([{ "a": 1, "b": 2 }, { "a": 1 }, { "a": 1, "b": 2, "c": 2 }], { "a": 1, "c": 2 }) should return [{ "a": 1, "b": 2, "c": 2 }].