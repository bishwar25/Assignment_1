function checkStr(varstr){
    var regex = new RegExp("^([0-9]{1,})$")
    
    console.log('Is it a number : '+regex.test(varstr))
}
checkStr('54')