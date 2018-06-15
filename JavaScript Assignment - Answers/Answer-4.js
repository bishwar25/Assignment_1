function numDecimalPlace(num,decimalPlace){
    return parseInt(num).toFixed(decimalPlace)
}

console.log(numDecimalPlace(23,2))