function factorial(num) {
	if ((num==0) || (num==1)) { 
		return 1
	} else {
		let total = 1
		for (i=1; i<=num; i++) {
			total = total * i;
		}
		return total;
	}
}

module.exports = { factorial }