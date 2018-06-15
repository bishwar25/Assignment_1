function checkStr(varstr){
    var regex = new RegExp(/^(#[a-f0-9]{6})$/i)
    
    console.log('Is it a hex-color : '+regex.test(varstr))
}
checkStr('#fghctx')