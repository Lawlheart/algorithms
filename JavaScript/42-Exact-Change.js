function drawer(price, cash, cid) {
  var change = cash - price;
  var register = [];
  var values = {
  	'ONE HUNDRED': 	    100,
  	'TWENTY': 			20,
  	'TEN': 		    	10,
  	'FIVE': 			5,
  	'ONE': 				1,
  	'QUARTER': 			0.25,
  	'DIME': 			0.10,
  	'NICKEL': 			0.05,
  	'PENNY': 			0.01
  }
  var totalCash = Math.round(cid.map(function(arr) {
      return arr[1];
    }).reduce(function(a,b) {
      return a+b;
    })*100)/100;

  if(change > totalCash) {
    return "Insufficient Funds"
  } else if (change === totalCash) {
    return "Closed";
  }
  
  for(var i=cid.length-1;i>=0;i--) {
  	var bill = cid[i][0];
  	var billValue = values[bill];
  	var billCount = Math.round(cid[i][1]/billValue);
  	var returned = 0;
  	// console.log(bill, billValue, billCount)
  	while(change >= billValue && billCount > 0) {
      change -= billValue;
      billCount -= 1;
      returned += 1;
      change = Math.round(change*100)/100;
  	}
  	if(returned > 0) {
      register.push([bill, Math.round(returned*billValue*100)/100]);
  	}
  }
  return register;
}

// Example cash-in-drawer array:
// [['PENNY', 1.01],
// ['NICKEL', 2.05],
// ['DIME', 3.10],
// ['QUARTER', 4.25],
// ['ONE', 90.00],
// ['FIVE', 55.00],
// ['TEN', 20.00],
// ['TWENTY', 60.00],
// ['ONE HUNDRED', 100.00]]

drawer(19.50, 20.00, [['PENNY', 1.01], ['NICKEL', 2.05], ['DIME', 3.10], ['QUARTER', 4.25], ['ONE', 90.00], ['FIVE', 55.00], ['TEN', 20.00], ['TWENTY', 60.00], ['ONE HUNDRED', 100.00]]);
