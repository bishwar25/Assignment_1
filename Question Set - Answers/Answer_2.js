function checkStr(varstr){
    var regex = new RegExp("^([a-zA-Z]{1,})$")
    
    console.log('Is it a string without space : '+regex.test(varstr))
}
checkStr('cdcc scsd')