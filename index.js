var chars = ['0','1','2','3','4','5','6','7','8','9','A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z','a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']

var changeBase = function(input, inputBase, conversionBase) {
	function reverseString(str) {
		return str.split("").reverse().join("");
	}
	var temp = 0, rem, rtrn = '';
	if (inputBase != 10) {
		for (var i = 0; i < input.length; i++) {
			temp += chars.indexOf(String(input[input.length - (1 + i)])) * (inputBase ** i)
		}
	} else {
		temp = input
	}
	while (temp > 0) {
		rem = temp % conversionBase
		temp -= rem
		temp = temp / conversionBase
		rtrn += chars[rem]
	}
	rtrn = reverseString(rtrn)
	return rtrn;
}

module.exports = {
	changeBase = changeBase
}