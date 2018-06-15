function binaryToDecimal(number){
	return parseInt(number.replace(/[^10]/gi,''),2)
}
console.log(binaryToDecimal('1001svsvs'));