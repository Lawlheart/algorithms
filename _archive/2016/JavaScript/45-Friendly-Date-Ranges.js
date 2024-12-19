

// FRIENDLY DATE RANGES
// Implement a way of converting two dates into a more friendly date range that could be presented to a user.
// It must not show any redundant information in the date range.
// For example, if the year and month are the same then only the day range should be displayed.
// Secondly, if the starting year is the current year, and the ending year can be inferred by the reader, the year should be omitted.
// Input date is formatted as YYYY-MM-DD

function friendly(str) {

  var start = str[0].split("-");
  var end = str[1].split("-");
  startYear = start[0];
  endYear = end[0];
  startMonth = start[1];
  endMonth = end[1];
  startDay = start[2];
  endDay = end[2];
  console.log(start, end)
  if(str[0] == str[1]) {
    return [prettifyDate(startDay, startMonth, startYear)]
  }

  if(endYear - startYear <=1 && startMonth === endMonth && endDay - startDay > 0) {
    return [prettifyDate(startDay, startMonth), prettifyDate(endDay)]
  }
  if(endYear - startYear <=1 && startYear <= 2016) {
    return [prettifyDate(startDay, startMonth), prettifyDate(endDay, endMonth)]
  }

  return [prettifyDate(startDay, startMonth, startYear), prettifyDate(endDay, endMonth, endYear)];
}

function getGetOrdinal(n) {
   var s=["th","st","nd","rd"],
       v=n%100;
   return n+(s[(v-20)%10]||s[v]||s[0]);
};

function prettifyDate( day, month, year) {
  var months = {
    '01': "January",
    '02': "February",
    '03': "March",
    '04': "April",
    '05': "May",
    '06': "June",
    '07': "July",
    '08': "August",
    '09': "September",
    '10': "October",
    '11': "November",
    '12': "December"
  };
  if(month === undefined && year === undefined){
    return getGetOrdinal(parseInt(day))
  } else if(year === undefined) {
    return months[month] + " " + getGetOrdinal(parseInt(day));
  } else {
    return months[month] + " " + getGetOrdinal(parseInt(day)) + ", " + year;
  }
}

friendly(['2015-07-01', '2015-07-04']);


// TESTING
// friendly(["2015-07-01", "2015-07-04"]) should return ["July 1st","4th"].
// friendly(["2015-12-01", "2016-02-03"]) should return ["December 1st","February 3rd"].
// friendly(["2015-12-01", "2017-02-03"]) should return ["December 1st, 2015","February 3rd, 2017"].
// friendly(["2016-03-01", "2016-05-05"]) should return ["March 1st","May 5th"]
// friendly(["2017-01-01", "2017-01-01"]) should return ["January 1st, 2017"].
// friendly(["2022-09-05", "2023-09-04"]) should return ["September 5th, 2022","September 4th, 2023"].