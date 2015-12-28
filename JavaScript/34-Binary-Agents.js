function binaryAgent(str) {
	var arr = str.split(/\s/g);
	var phrase = ""
	for(var i=0;i<arr.length;i++) {
		phrase += String.fromCharCode(parseInt(arr[i], 2));
	}
  return str;
}

binaryAgent('01000001 01110010 01100101 01101110 00100111 01110100 00100000 01100010 01101111 01101110 01100110 01101001 01110010 01100101 01110011 00100000 01100110 01110101 01101110 00100001 00111111');
