import unittest

# FRIENDLY DATE RANGES
# Implement a way of converting two dates into a more friendly date range that could be presented to a user.
# It must not show any redundant information in the date range.
# For example, if the year and month are the same then only the day range should be displayed.
# Secondly, if the starting year is the current year, and the ending year can be inferred by the reader, the year should be omitted.
# Input date is formatted as YYYY-MM-DD

def friendly(lis):
	return lis

class friendlyTest(unittest.TestCase):
	def test(self):
		self.assertEqual(type(friendly(["2015-07-01", "2015-07-04"])), list)
		self.assertEqual(friendly(["2015-07-01", "2015-07-04"]), ["July 1st","4th"])
		self.assertEqual(friendly(["2015-12-01", "2016-02-03"]), ["December 1st","February 3rd"])
		self.assertEqual(friendly(["2015-12-01", "2017-02-03"]), ["December 1st, 2015","February 3rd, 2017"])
		self.assertEqual(friendly(["2016-03-01", "2016-05-05"]), ["March 1st","May 5th"])
		self.assertEqual(friendly(["2017-01-01", "2017-01-01"]), ["January 1st, 2017"])
		self.assertEqual(friendly(["2022-09-05", "2023-09-04"]), ["September 5th, 2022","September 4th, 2023"])

if __name__ == '__main__':
	unittest.main()



# TESTING
# friendly(["2015-07-01", "2015-07-04"]) should return ["July 1st","4th"].
# friendly(["2015-12-01", "2016-02-03"]) should return ["December 1st","February 3rd"].
# friendly(["2015-12-01", "2017-02-03"]) should return ["December 1st, 2015","February 3rd, 2017"].
# friendly(["2016-03-01", "2016-05-05"]) should return ["March 1st","May 5th"]
# friendly(["2017-01-01", "2017-01-01"]) should return ["January 1st, 2017"].
# friendly(["2022-09-05", "2023-09-04"]) should return ["September 5th, 2022","September 4th, 2023"].