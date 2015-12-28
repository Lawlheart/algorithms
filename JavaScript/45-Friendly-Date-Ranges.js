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
