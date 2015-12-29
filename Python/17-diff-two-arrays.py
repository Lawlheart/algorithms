import unittest

# Diff Two Lists
# Compare two arrays and return a new array with any items only found in one of the original arrays.

def diff(lis1, lis2):
	return lis1

class diffTest(unittest.TestCase):
	def test(self):
		self.assertEqual(type(diff([1, 2, 3, 5], [1, 2, 3, 4, 5])), list)
		self.assertEqual(diff(["diorite", "andesite", "grass", "dirt", "pink wool", "dead shrub"], ["diorite", "andesite", "grass", "dirt", "dead shrub"]), ["pink wool"])
		self.assertEqual(diff(["andesite", "grass", "dirt", "pink wool", "dead shrub"], ["diorite", "andesite", "grass", "dirt", "dead shrub"]), ["diorite", "pink wool"])
		self.assertEqual(diff(["andesite", "grass", "dirt", "dead shrub"], ["andesite", "grass", "dirt", "dead shrub"]), [])
		self.assertEqual(diff([1, 2, 3, 5], [1, 2, 3, 4, 5]), [4])
		self.assertEqual(diff([1, "calf", 3, "piglet"], [1, "calf", 3, 4]), ["piglet", 4])
		self.assertEqual(diff([], ["snuffleupagus", "cookie monster", "elmo"]), ["snuffleupagus", "cookie monster", "elmo"])
		self.assertEqual(diff([1, "calf", 3, "piglet"], [7, "filly"]), [1, "calf", 3, "piglet", 7, "filly"])


if __name__ == '__main__':
	unittest.main()

# TESTING
# diff([1, 2, 3, 5], [1, 2, 3, 4, 5]) should return an array.
# ["diorite", "andesite", "grass", "dirt", "pink wool", "dead shrub"], ["diorite", "andesite", "grass", "dirt", "dead shrub"] should return ["pink wool"].
# ["andesite", "grass", "dirt", "pink wool", "dead shrub"], ["diorite", "andesite", "grass", "dirt", "dead shrub"] should return ["diorite", "pink wool"].
# ["andesite", "grass", "dirt", "dead shrub"], ["andesite", "grass", "dirt", "dead shrub"] should return [].
# [1, 2, 3, 5], [1, 2, 3, 4, 5] should return [4].
# [1, "calf", 3, "piglet"], [1, "calf", 3, 4] should return ["piglet", 4].
# [], ["snuffleupagus", "cookie monster", "elmo"] should return ["snuffleupagus", "cookie monster", "elmo"].
# [1, "calf", 3, "piglet"], [7, "filly"] should return [1, "calf", 3, "piglet", 7, "filly"].