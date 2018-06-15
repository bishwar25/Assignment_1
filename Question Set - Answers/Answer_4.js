function checkStr(varstr){
    var regex = new RegExp("^((http|https):\/\/[a-zA-Z0-9\-]{3,60}\.[a-zA-Z0-9\-]{3,60}\.[a-zA-Z]{3,10})$")
    
    console.log('Is it a URL : '+regex.test(varstr))
}
checkStr('http://asas.sdsd.kjghj')